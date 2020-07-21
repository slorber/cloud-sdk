/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { TestNestedComplexType, TestNestedComplexTypeField } from './TestNestedComplexType';
import { ComplexTypeBigNumberPropertyField, ComplexTypeBooleanPropertyField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, Entity, FieldType, PropertyMetadata, Time, deserializeComplexType } from '@sap-cloud-sdk/core/v4';

/**
 * TestComplexType
 */
export interface TestComplexType {
  /**
   * String Property.
   * @nullable
   */
  stringProperty?: string;
  /**
   * Boolean Property.
   * @nullable
   */
  booleanProperty?: boolean;
  /**
   * Guid Property.
   * @nullable
   */
  guidProperty?: string;
  /**
   * Int 16 Property.
   * @nullable
   */
  int16Property?: number;
  /**
   * Int 32 Property.
   * @nullable
   */
  int32Property?: number;
  /**
   * Int 64 Property.
   * @nullable
   */
  int64Property?: BigNumber;
  /**
   * Decimal Property.
   * @nullable
   */
  decimalProperty?: BigNumber;
  /**
   * Single Property.
   * @nullable
   */
  singleProperty?: number;
  /**
   * Double Property.
   * @nullable
   */
  doubleProperty?: number;
  /**
   * Float Property.
   * @nullable
   */
  floatProperty?: number;
  /**
   * Time Property.
   * @nullable
   */
  timeProperty?: Time;
  /**
   * Date Time Property.
   * @nullable
   */
  dateTimeProperty?: Moment;
  /**
   * Date Time Off Set Property.
   * @nullable
   */
  dateTimeOffSetProperty?: Moment;
  /**
   * Byte Property.
   * @nullable
   */
  byteProperty?: number;
  /**
   * S Byte Property.
   * @nullable
   */
  sByteProperty?: number;
  /**
   * Complex Type Property.
   * @nullable
   */
  complexTypeProperty?: TestNestedComplexType;
  /**
   * Base String Property.
   * @nullable
   */
  baseStringProperty?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TestComplexType.build]] instead.
 */
export function createTestComplexType(json: any): TestComplexType {
  return TestComplexType.build(json);
}

/**
 * TestComplexTypeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TestComplexTypeField<EntityT extends Entity> extends ComplexTypeField<EntityT, typeof TestComplexType> {
  /**
   * Representation of the [[TestComplexType.stringProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stringProperty: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StringProperty', this, 'Edm.String');
  /**
   * Representation of the [[TestComplexType.booleanProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  booleanProperty: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('BooleanProperty', this, 'Edm.Boolean');
  /**
   * Representation of the [[TestComplexType.guidProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  guidProperty: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GuidProperty', this, 'Edm.Guid');
  /**
   * Representation of the [[TestComplexType.int16Property]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  int16Property: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Int16Property', this, 'Edm.Int16');
  /**
   * Representation of the [[TestComplexType.int32Property]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  int32Property: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Int32Property', this, 'Edm.Int32');
  /**
   * Representation of the [[TestComplexType.int64Property]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  int64Property: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('Int64Property', this, 'Edm.Int64');
  /**
   * Representation of the [[TestComplexType.decimalProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  decimalProperty: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('DecimalProperty', this, 'Edm.Decimal');
  /**
   * Representation of the [[TestComplexType.singleProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleProperty: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SingleProperty', this, 'Edm.Single');
  /**
   * Representation of the [[TestComplexType.doubleProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  doubleProperty: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DoubleProperty', this, 'Edm.Double');
  /**
   * Representation of the [[TestComplexType.floatProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  floatProperty: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FloatProperty', this, 'Edm.Float');
  /**
   * Representation of the [[TestComplexType.timeProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeProperty: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('TimeProperty', this, 'Edm.Time');
  /**
   * Representation of the [[TestComplexType.dateTimeProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateTimeProperty: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateTimeProperty', this, 'Edm.DateTime');
  /**
   * Representation of the [[TestComplexType.dateTimeOffSetProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateTimeOffSetProperty: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateTimeOffSetProperty', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TestComplexType.byteProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  byteProperty: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ByteProperty', this, 'Edm.Byte');
  /**
   * Representation of the [[TestComplexType.sByteProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sByteProperty: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SByteProperty', this, 'Edm.SByte');
  /**
   * Representation of the [[TestComplexType.complexTypeProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  complexTypeProperty: TestNestedComplexTypeField<EntityT> = new TestNestedComplexTypeField('ComplexTypeProperty', this);
  /**
   * Representation of the [[TestComplexType.baseStringProperty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseStringProperty: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BaseStringProperty', this, 'Edm.String');

  /**
   * Creates an instance of TestComplexTypeField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT, typeof TestComplexType>) {
    super(fieldName, fieldOf, TestComplexType);
  }
}

export namespace TestComplexType {
  /**
   * Metadata information on all properties of the `TestComplexType` complex type.
   */
  export const _propertyMetadata: PropertyMetadata[] = [{
    originalName: 'StringProperty',
    name: 'stringProperty',
    type: 'Edm.String'
  }, {
    originalName: 'BooleanProperty',
    name: 'booleanProperty',
    type: 'Edm.Boolean'
  }, {
    originalName: 'GuidProperty',
    name: 'guidProperty',
    type: 'Edm.Guid'
  }, {
    originalName: 'Int16Property',
    name: 'int16Property',
    type: 'Edm.Int16'
  }, {
    originalName: 'Int32Property',
    name: 'int32Property',
    type: 'Edm.Int32'
  }, {
    originalName: 'Int64Property',
    name: 'int64Property',
    type: 'Edm.Int64'
  }, {
    originalName: 'DecimalProperty',
    name: 'decimalProperty',
    type: 'Edm.Decimal'
  }, {
    originalName: 'SingleProperty',
    name: 'singleProperty',
    type: 'Edm.Single'
  }, {
    originalName: 'DoubleProperty',
    name: 'doubleProperty',
    type: 'Edm.Double'
  }, {
    originalName: 'FloatProperty',
    name: 'floatProperty',
    type: 'Edm.Float'
  }, {
    originalName: 'TimeProperty',
    name: 'timeProperty',
    type: 'Edm.Time'
  }, {
    originalName: 'DateTimeProperty',
    name: 'dateTimeProperty',
    type: 'Edm.DateTime'
  }, {
    originalName: 'DateTimeOffSetProperty',
    name: 'dateTimeOffSetProperty',
    type: 'Edm.DateTimeOffset'
  }, {
    originalName: 'ByteProperty',
    name: 'byteProperty',
    type: 'Edm.Byte'
  }, {
    originalName: 'SByteProperty',
    name: 'sByteProperty',
    type: 'Edm.SByte'
  }, {
    originalName: 'ComplexTypeProperty',
    name: 'complexTypeProperty',
    type: TestNestedComplexType
  }, {
    originalName: 'BaseStringProperty',
    name: 'baseStringProperty',
    type: 'Edm.String'
  }];

  export function build(json: { [keys: string]: FieldType | TestNestedComplexType }): TestComplexType {
    return deserializeComplexType(json, TestComplexType);
  }
}
