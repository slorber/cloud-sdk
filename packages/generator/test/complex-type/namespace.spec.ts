/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { StructureKind, VariableDeclarationKind } from 'ts-morph';
import { complexTypeNamespace } from '../../src/complex-type/namespace';
import { complexMeal, complexMealWithDesert } from '../test-util/data-model';

describe('namespace', () => {
  it('complexTypeSourceFile', () => {
    const actual = complexTypeNamespace(complexMeal);
    expect(actual).toEqual({
      kind: StructureKind.Namespace,
      name: 'ComplexMealType',
      isExported: true,
      statements: [
        {
          kind: StructureKind.VariableStatement,
          declarationKind: VariableDeclarationKind.Const,
          declarations: [
            {
              name: '_propertyMetadata',
              initializer: `[{
        originalName: 'Complexity',
        name: 'complexity',
        type: 'Edm.String'
      }, {
        originalName: 'Amount',
        name: 'amount',
        type: 'Edm.Int16'
      }]`,
              type: 'PropertyMetadata[]'
            }
          ],
          docs: [
            '\nMetadata information on all properties of the `ComplexMealType` complex type.'
          ],
          isExported: true
        },
        {
          kind: StructureKind.Function,
          name: 'build',
          returnType: 'ComplexMealType',
          parameters: [
            {
              name: 'json',
              type: '{ [keys: string]: FieldType }'
            }
          ],
          statements: 'return deserializeComplexType(json, ComplexMealType);',
          isExported: true
        }
      ]
    });
  });

  it('should generate a builder when a complex type includes a complex type property', () => {
    const actual = complexTypeNamespace(complexMealWithDesert);
    expect(actual).toEqual({
      kind: StructureKind.Namespace,
      name: 'ComplexMealWithDesertType',
      isExported: true,
      statements: [
        {
          kind: StructureKind.VariableStatement,
          declarationKind: VariableDeclarationKind.Const,
          declarations: [
            {
              name: '_propertyMetadata',
              initializer: `[{
        originalName: 'ComplexDesert',
        name: 'complexDesert',
        type: ComplexDesert
      }, {
        originalName: 'Amount',
        name: 'amount',
        type: 'Edm.Int16'
      }]`,
              type: 'PropertyMetadata[]'
            }
          ],
          docs: [
            '\nMetadata information on all properties of the `ComplexMealWithDesertType` complex type.'
          ],
          isExported: true
        },
        {
          kind: StructureKind.Function,
          name: 'build',
          returnType: 'ComplexMealWithDesertType',
          parameters: [
            {
              name: 'json',
              type: '{ [keys: string]: FieldType | ComplexDesert }'
            }
          ],
          statements:
            'return deserializeComplexType(json, ComplexMealWithDesertType);',
          isExported: true
        }
      ]
    });
  });
});
