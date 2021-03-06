/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilderV2, DeleteRequestBuilderV2, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, ODataBatchChangeSetV2, ODataBatchRequestBuilderV2, UpdateRequestBuilderV2 } from '../../../../../src';
import { TestEntity, TestEntityMultiLink, TestEntityOtherMultiLink, TestEntityLvl2MultiLink, TestEntitySingleLink, TestEntityLvl2SingleLink, TestEntityCircularLinkParent, TestEntityCircularLinkChild, TestEntityEndsWith, TestEntityEndsWithSomethingElse } from './index';

/**
 * Batch builder for operations supported on the Test Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadTestServiceRequestBuilder | ODataBatchChangeSetV2<WriteTestServiceRequestBuilder>>): ODataBatchRequestBuilderV2 {
  return new ODataBatchRequestBuilderV2(defaultTestServicePath, requests, map);
}

/**
 * Change set constructor consists of write operations supported on the Test Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: WriteTestServiceRequestBuilder[]): ODataBatchChangeSetV2<WriteTestServiceRequestBuilder> {
  return new ODataBatchChangeSetV2(requests);
}

export const defaultTestServicePath = '/sap/opu/odata/sap/API_TEST_SRV';
const map = { 'A_TestEntity': TestEntity, 'A_TestEntityMultiLink': TestEntityMultiLink, 'A_TestEntityOtherMultiLink': TestEntityOtherMultiLink, 'A_TestEntityLvl2MultiLink': TestEntityLvl2MultiLink, 'A_TestEntitySingleLink': TestEntitySingleLink, 'A_TestEntityLvl2SingleLink': TestEntityLvl2SingleLink, 'A_TestEntityCircularLinkParent': TestEntityCircularLinkParent, 'A_TestEntityCircularLinkChild': TestEntityCircularLinkChild, 'A_TestEntityEndsWithCollection': TestEntityEndsWith, 'A_TestEntityEndsWithSomethingElse': TestEntityEndsWithSomethingElse };
export type ReadTestServiceRequestBuilder = GetAllRequestBuilderV2<TestEntity> | GetAllRequestBuilderV2<TestEntityMultiLink> | GetAllRequestBuilderV2<TestEntityOtherMultiLink> | GetAllRequestBuilderV2<TestEntityLvl2MultiLink> | GetAllRequestBuilderV2<TestEntitySingleLink> | GetAllRequestBuilderV2<TestEntityLvl2SingleLink> | GetAllRequestBuilderV2<TestEntityCircularLinkParent> | GetAllRequestBuilderV2<TestEntityCircularLinkChild> | GetAllRequestBuilderV2<TestEntityEndsWith> | GetAllRequestBuilderV2<TestEntityEndsWithSomethingElse> | GetByKeyRequestBuilderV2<TestEntity> | GetByKeyRequestBuilderV2<TestEntityMultiLink> | GetByKeyRequestBuilderV2<TestEntityOtherMultiLink> | GetByKeyRequestBuilderV2<TestEntityLvl2MultiLink> | GetByKeyRequestBuilderV2<TestEntitySingleLink> | GetByKeyRequestBuilderV2<TestEntityLvl2SingleLink> | GetByKeyRequestBuilderV2<TestEntityCircularLinkParent> | GetByKeyRequestBuilderV2<TestEntityCircularLinkChild> | GetByKeyRequestBuilderV2<TestEntityEndsWith> | GetByKeyRequestBuilderV2<TestEntityEndsWithSomethingElse>;
export type WriteTestServiceRequestBuilder = CreateRequestBuilderV2<TestEntity> | UpdateRequestBuilderV2<TestEntity> | DeleteRequestBuilderV2<TestEntity> | CreateRequestBuilderV2<TestEntityMultiLink> | UpdateRequestBuilderV2<TestEntityMultiLink> | DeleteRequestBuilderV2<TestEntityMultiLink> | CreateRequestBuilderV2<TestEntityOtherMultiLink> | UpdateRequestBuilderV2<TestEntityOtherMultiLink> | DeleteRequestBuilderV2<TestEntityOtherMultiLink> | CreateRequestBuilderV2<TestEntityLvl2MultiLink> | UpdateRequestBuilderV2<TestEntityLvl2MultiLink> | DeleteRequestBuilderV2<TestEntityLvl2MultiLink> | CreateRequestBuilderV2<TestEntitySingleLink> | UpdateRequestBuilderV2<TestEntitySingleLink> | DeleteRequestBuilderV2<TestEntitySingleLink> | CreateRequestBuilderV2<TestEntityLvl2SingleLink> | UpdateRequestBuilderV2<TestEntityLvl2SingleLink> | DeleteRequestBuilderV2<TestEntityLvl2SingleLink> | CreateRequestBuilderV2<TestEntityCircularLinkParent> | UpdateRequestBuilderV2<TestEntityCircularLinkParent> | DeleteRequestBuilderV2<TestEntityCircularLinkParent> | CreateRequestBuilderV2<TestEntityCircularLinkChild> | UpdateRequestBuilderV2<TestEntityCircularLinkChild> | DeleteRequestBuilderV2<TestEntityCircularLinkChild> | CreateRequestBuilderV2<TestEntityEndsWith> | UpdateRequestBuilderV2<TestEntityEndsWith> | DeleteRequestBuilderV2<TestEntityEndsWith> | CreateRequestBuilderV2<TestEntityEndsWithSomethingElse> | UpdateRequestBuilderV2<TestEntityEndsWithSomethingElse> | DeleteRequestBuilderV2<TestEntityEndsWithSomethingElse>;
