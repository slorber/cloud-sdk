/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import {
  FunctionDeclarationStructure,
  NamespaceDeclarationStructure,
  StructureKind,
  VariableDeclarationKind,
  VariableStatementStructure
} from 'ts-morph';
import { unique } from '@sap-cloud-sdk/util';
import { VdmComplexType } from '../vdm-types';

export function complexTypeNamespace(
  complexType: VdmComplexType
): NamespaceDeclarationStructure {
  return {
    kind: StructureKind.Namespace,
    name: complexType.typeName,
    isExported: true,
    statements: [propertyMetadata(complexType), factoryFunction(complexType)]
  };
}

function factoryFunction(
  complexType: VdmComplexType
): FunctionDeclarationStructure {
  return {
    kind: StructureKind.Function,
    name: 'build',
    returnType: complexType.typeName,
    parameters: [{ name: 'json', type: getJsonType(complexType) }],
    statements: `return deserializeComplexType(json, ${complexType.typeName});`,
    isExported: true
  };
}

function getJsonType(complexType: VdmComplexType): string {
  const unionOfAllTypes = [
    'FieldType',
    ...unique(
      complexType.properties
        .filter(prop => prop.isComplex)
        .map(prop => prop.jsType)
    ).sort()
  ].join(' | ');

  return `{ [keys: string]: ${unionOfAllTypes} }`;
}

function getPropertyMetadataInitializer(complexType: VdmComplexType): string {
  return `[${complexType.properties
    .map(
      property =>
        `{
        originalName: '${property.originalName}',
        name: '${property.instancePropertyName}',
        type: ${property.isComplex ? property.jsType : `'${property.edmType}'`}
      }`
    )
    .join(', ')}]`;
}

function propertyMetadata(
  complexType: VdmComplexType
): VariableStatementStructure {
  return {
    kind: StructureKind.VariableStatement,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: '_propertyMetadata',
        initializer: getPropertyMetadataInitializer(complexType),
        type: 'PropertyMetadata[]'
      }
    ],
    docs: [
      `\nMetadata information on all properties of the \`${complexType.typeName}\` complex type.`
    ],
    isExported: true
  };
}
