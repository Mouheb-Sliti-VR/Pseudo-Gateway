// Mock response data for process flow
const mockProcessFlowResponse = {
    "id": "eec3463b-1890-48c7-b6ff-0d1de966ec50",
    "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/eec3463b-1890-48c7-b6ff-0d1de966ec50",
    "correlationId": null,
    "processFlowDate": "2024-02-20T15:05:04.452578339Z",
    "processFlowSpecification": "OrderCapture",
    "description": null,
    "channel": [
        {
            "id": "004",
            "href": null,
            "name": "METAVERSE",
            "@baseType": null,
            "@schemaLocation": null,
            "@type": null,
            "@referredType": null
        }
    ],
    "characteristic": [],
    "relatedEntity": [
        {
            "id": "5c1b0a6c-5ae4-4c1b-ac40-a3209aa63eee",
            "href": null,
            "name": null,
            "role": null,
            "@baseType": null,
            "@schemaLocation": null,
            "@type": null,
            "@referredType": "productOffering"
        }
    ],
    "relatedParty": [
        {
            "id": "227-mf30",
            "href": null,
            "name": "Lisa",
            "role": "customer",
            "@baseType": null,
            "@schemaLocation": null,
            "@type": null,
            "@referredType": "individual"
        }
    ],
    "state": "active",
    "taskFlow": null,
    "@baseType": null,
    "@schemaLocation": null,
    "@type": "ProcessFlow",
    "_links": {
        "self": {
            "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/eec3463b-1890-48c7-b6ff-0d1de966ec50"
        },
        "taskFlowList": {
            "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/eec3463b-1890-48c7-b6ff-0d1de966ec50/taskFlow"
        },
        "nextTaskstoBePerformed": [
            {
                "title": "OrderCapture.cancelOrder",
                "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/eec3463b-1890-48c7-b6ff-0d1de966ec50/taskFlow/49a5cea7-a217-4325-b484-04d3934b4b14",
                "state": "active",
                "taskFlowSpecificationId": "49a5cea7-a217-4325-b484-04d3934b4b14",
                "taskFlowSpecificationCharacteristic": null,
                "method": "PATCH",
                "accepts": "merge-json-patch"
            },
            {
                "title": "OrderCapture.confirmConfiguration",
                "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/eec3463b-1890-48c7-b6ff-0d1de966ec50/taskFlow/4ab98772-1a68-4b77-b10d-a3f7cb33bdfa",
                "state": "active",
                "taskFlowSpecificationId": "4ab98772-1a68-4b77-b10d-a3f7cb33bdfa",
                "taskFlowSpecificationCharacteristic": [
                    {
                        "name": "ConfirmConfigurationIsProcessed",
                        "id": "4ab98772-1a68-4b77-b10d-a3f7cb33bdfa-ConfirmConfigurationIsProcessed",
                        "valueType": "Object",
                        "minCardinality": 1,
                        "maxCardinality": 1,
                        "characteristicSpecificationRelationship": null,
                        "characteristicValueSpecification": [
                            {
                                "@type": "ObjectCharacteristicValueSpecification",
                                "isDefault": null,
                                "value": {
                                    "ConfirmConfigurationIsProcessed": {
                                        "required": [
                                            "configuration.id",
                                            "configuration.state"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "configuration.id": {
                                                "type": "string",
                                                "readOnly": true
                                            },
                                            "configuration.state": {
                                                "type": "string",
                                                "enum": [
                                                    "confValidated",
                                                    "confModified"
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],
                "method": "PATCH",
                "accepts": "merge-json-patch"
            }
        ],
        "existingTaskEditable": null
    }
};

const mockedConfResponse =  {
    "id": "4ab98772-1a68-4b77-b10d-a3f7cb33bdfa",
    "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/eec3463b-1890-48c7-b6ff-0d1de966ec50/taskFlow/4ab98772-1a68-4b77-b10d-a3f7cb33bdfa",
    "correlationId": null,
    "completionMethod": null,
    "isMandatory": null,
    "priority": 50,
    "taskFlowSpecification": "confirmConfiguration",
    "description": null,
    "channel": [
        {
            "id": "001",
            "href": null,
            "name": "WEB",
            "@baseType": null,
            "@schemaLocation": null,
            "@type": null,
            "@referredType": null
        }
    ],
    "characteristic": [
        {
            "name": "ConfirmConfigurationIsProcessed",
            "id": null,
            "valueType": "Object",
            "@baseType": null,
            "@schemaLocation": null,
            "@type": "ObjectCharacteristic",
            "characteristicRelationship": null,
            "value": {
                "configuration.id": "ACK",
                "configuration.state": "confValidated"
            }
        }
    ],
    "relatedEntity": [
        {
            "id": "65d4c16a9d6c4567d4b6da41",
            "href": null,
            "name": null,
            "role": null,
            "@baseType": null,
            "@schemaLocation": null,
            "@type": null,
            "@referredType": "ProductOrder"
        }
    ],
    "relatedParty": [
        {
            "id": "123orange123",
            "href": null,
            "name": "Mouheb_Sliti",
            "role": "customer",
            "@baseType": null,
            "@schemaLocation": null,
            "@type": null,
            "@referredType": "individual"
        }
    ],
    "state": "active",
    "taskFlowRelationship": null,
    "@baseType": null,
    "@schemaLocation": null,
    "@type": "TaskFlow",
    "_links": {
        "self": {
            "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/eec3463b-1890-48c7-b6ff-0d1de966ec50/taskFlow/4ab98772-1a68-4b77-b10d-a3f7cb33bdfa"
        },
        "taskFlowList": {
            "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/eec3463b-1890-48c7-b6ff-0d1de966ec50/taskFlow"
        },
        "nextTaskstoBePerformed": [
            {
                "title": "OrderCapture.cancelOrder",
                "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/eec3463b-1890-48c7-b6ff-0d1de966ec50/taskFlow/49a5cea7-a217-4325-b484-04d3934b4b14",
                "state": "active",
                "taskFlowSpecificationId": "49a5cea7-a217-4325-b484-04d3934b4b14",
                "taskFlowSpecificationCharacteristic": null,
                "method": "PATCH",
                "accepts": "merge-json-patch"
            },
            {
                "title": "OrderCapture.validateOrder",
                "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/eec3463b-1890-48c7-b6ff-0d1de966ec50/taskFlow/e79fcd45-5b35-4daa-8204-d7778f21d3c1",
                "state": "active",
                "taskFlowSpecificationId": "e79fcd45-5b35-4daa-8204-d7778f21d3c1",
                "taskFlowSpecificationCharacteristic": [
                    {
                        "name": "ValidateOrderByCustomer",
                        "id": "e79fcd45-5b35-4daa-8204-d7778f21d3c1-ValidateOrderByCustomer",
                        "valueType": "Object",
                        "minCardinality": 1,
                        "maxCardinality": 1,
                        "characteristicSpecificationRelationship": null,
                        "characteristicValueSpecification": [
                            {
                                "@type": "ObjectCharacteristicValueSpecification",
                                "isDefault": null,
                                "value": {
                                    "ValidateOrderByCustomer": {
                                        "required": [
                                            "productOrderId",
                                            "orderValidationStatus"
                                        ],
                                        "type": "object",
                                        "properties": {
                                            "productOrderId": {
                                                "type": "string",
                                                "readOnly": true
                                            },
                                            "orderValidationStatus": {
                                                "type": "string",
                                                "enum": [
                                                    "orderValidatedByCustomer"
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],
                "method": "PATCH",
                "accepts": "merge-json-patch"
            }
        ],
        "existingTaskEditable": []
    }
};

const mockedValidateResponse = {
    "id": "65d4c4ba9d6c4567d4b6da43",
    "href": "https://poi-staging.apps.fr01.paas.tech.orange/65d4c4ba9d6c4567d4b6da43",
    "orderDate": "2024-02-20T15:26:50.796Z",
    "productOrderItem": [
        {
            "id": "2129b25c-ceb7-4243-a355-aea2151c88ac",
            "quantity": 1,
            "action": "add",
            "productOffering": {
                "id": "5c1b0a6c-5ae4-4c1b-ac40-a3209aa63eee",
                "name": "Mobile Package 1",
                "@type": "Contract"
            },
            "productOrderItemRelationship": [
                {
                    "id": "789d430f-18a5-4317-b1bc-a70d4c087846",
                    "relationshipType": "bundles"
                }
            ],
            "state": "draft",
            "@type": "ProductOrderItem"
        },
        {
            "id": "789d430f-18a5-4317-b1bc-a70d4c087846",
            "quantity": 1,
            "action": "add",
            "productOffering": {
                "id": "7533a186-dbde-475c-aa43-04889a95a272",
                "name": "Mobile Package 1",
                "@type": "BundledProductOffering"
            },
            "productOrderItemRelationship": [
                {
                    "id": "2129b25c-ceb7-4243-a355-aea2151c88ac",
                    "relationshipType": "isChild"
                },
                {
                    "id": "26bbfe3d-4f79-49c1-85a2-8c155834704e",
                    "relationshipType": "bundles"
                },
                {
                    "id": "8664b9cd-52a9-4576-a1ca-2f2e31cadf6c",
                    "relationshipType": "bundles"
                },
                {
                    "id": "e3c5d895-5377-4882-bd5b-bd0197a554b9",
                    "relationshipType": "bundles"
                },
                {
                    "id": "b9380c7a-d04f-4830-af7a-c18e5268034f",
                    "relationshipType": "bundles"
                }
            ],
            "state": "draft",
            "@type": "ProductOrderItem"
        },
        {
            "id": "26bbfe3d-4f79-49c1-85a2-8c155834704e",
            "quantity": 1,
            "action": "add",
            "itemPrice": [
                {
                    "description": "POP_5Euro",
                    "name": "POP_5Euro",
                    "priceType": "NRC",
                    "price": {
                        "taxRate": 0,
                        "dutyFreeAmount": {
                            "unit": "EUR",
                            "value": 5
                        },
                        "taxIncludedAmount": {
                            "unit": "EUR",
                            "value": 5
                        }
                    },
                    "productOfferingPrice": {
                        "id": "0610b720-fd9f-4585-af01-4dbfbad9a1a1",
                        "immediatePayment": true
                    }
                }
            ],
            "productOffering": {
                "id": "3d142e30-cab2-40d9-841b-70174df320d7",
                "name": "Mobile Line",
                "@type": "AtomicProductOffering"
            },
            "productOrderItemRelationship": [
                {
                    "id": "789d430f-18a5-4317-b1bc-a70d4c087846",
                    "relationshipType": "isChild"
                },
                {
                    "id": "4c5db0d5-b526-49bd-8724-0cebe1da1f80",
                    "relationshipType": "sells"
                }
            ],
            "state": "draft",
            "@type": "ProductOrderItem"
        },
        {
            "id": "4c5db0d5-b526-49bd-8724-0cebe1da1f80",
            "quantity": 1,
            "action": "add",
            "product": {
                "isBundle": false,
                "productCharacteristic": [
                    {
                        "name": "MSISDN",
                        "valueType": "string",
                        "value": "4152797439",
                        "@type": "StringCharacteristic",
                        "id": "001"
                    }
                ],
                "productSpecification": {
                    "id": "c458d968-3718-4754-9408-7bd81526e7b2",
                    "name": "Mobile Line",
                    "@type": "ProductSpecificationRef"
                },
                "realizingResource": [
                    {
                        "id": "12x",
                        "@type": "Resource"
                    }
                ],
                "@type": "Product"
            },
            "productOrderItemRelationship": [
                {
                    "id": "26bbfe3d-4f79-49c1-85a2-8c155834704e",
                    "relationshipType": "isSold"
                },
                {
                    "id": "8598c10f-a60b-489d-ab00-67fb5c3e7b7d",
                    "relationshipType": "reliesOn"
                }
            ],
            "state": "draft",
            "@type": "ProductOrderItem"
        },
        {
            "id": "8664b9cd-52a9-4576-a1ca-2f2e31cadf6c",
            "quantity": 1,
            "action": "add",
            "productOffering": {
                "id": "0200ecae-4b1e-41c1-a177-750a2a266f09",
                "name": "Connectivity",
                "@type": "AtomicProductOffering"
            },
            "productOrderItemRelationship": [
                {
                    "id": "789d430f-18a5-4317-b1bc-a70d4c087846",
                    "relationshipType": "isChild"
                },
                {
                    "id": "982ae79f-2508-483b-9917-9db98c0740f6",
                    "relationshipType": "sells"
                }
            ],
            "state": "draft",
            "@type": "ProductOrderItem"
        },
        {
            "id": "982ae79f-2508-483b-9917-9db98c0740f6",
            "quantity": 1,
            "action": "add",
            "product": {
                "isBundle": false,
                "productCharacteristic": [
                    {
                        "name": "ICCID",
                        "valueType": "string",
                        "value": "891004234814455936",
                        "@type": "StringCharacteristic",
                        "id": "002"
                    }
                ],
                "productSpecification": {
                    "id": "5e18402d-c964-4d52-b362-22ef79c27c01",
                    "name": "Connectivity",
                    "@type": "ProductSpecificationRef"
                },
                "realizingResource": [
                    {
                        "id": "12x",
                        "@type": "Resource"
                    }
                ],
                "@type": "Product"
            },
            "productOrderItemRelationship": [
                {
                    "id": "8664b9cd-52a9-4576-a1ca-2f2e31cadf6c",
                    "relationshipType": "isSold"
                },
                {
                    "id": "8598c10f-a60b-489d-ab00-67fb5c3e7b7d",
                    "relationshipType": "reliesOn"
                }
            ],
            "state": "draft",
            "@type": "ProductOrderItem"
        },
        {
            "id": "e3c5d895-5377-4882-bd5b-bd0197a554b9",
            "quantity": 1,
            "action": "add",
            "itemPrice": [
                {
                    "description": "POP_5Euro",
                    "name": "POP_5Euro",
                    "priceType": "NRC",
                    "price": {
                        "taxRate": 0,
                        "dutyFreeAmount": {
                            "unit": "EUR",
                            "value": 5
                        },
                        "taxIncludedAmount": {
                            "unit": "EUR",
                            "value": 5
                        }
                    },
                    "productOfferingPrice": {
                        "id": "33971893-80c5-4af8-975b-7590ad8c9cad",
                        "immediatePayment": true
                    }
                }
            ],
            "productOffering": {
                "id": "3240b426-1b52-4680-aec2-1be06b34cc17",
                "name": "Time Bundle",
                "@type": "AtomicProductOffering"
            },
            "productOrderItemRelationship": [
                {
                    "id": "789d430f-18a5-4317-b1bc-a70d4c087846",
                    "relationshipType": "isChild"
                },
                {
                    "id": "a8ea7e1c-753d-4ef9-bba3-f69debbb50e1",
                    "relationshipType": "sells"
                }
            ],
            "state": "draft",
            "@type": "ProductOrderItem"
        },
        {
            "id": "a8ea7e1c-753d-4ef9-bba3-f69debbb50e1",
            "quantity": 1,
            "action": "add",
            "product": {
                "isBundle": false,
                "productCharacteristic": [
                    {
                        "name": "volume",
                        "valueType": "string",
                        "value": "1h",
                        "@type": "StringCharacteristic",
                        "id": "003"
                    }
                ],
                "productSpecification": {
                    "id": "82f3bab6-63a1-4008-96a3-8d411d0c5b38",
                    "name": "Time Bundle",
                    "@type": "ProductSpecificationRef"
                },
                "realizingResource": [
                    {
                        "id": "12x",
                        "@type": "Resource"
                    }
                ],
                "@type": "Product"
            },
            "productOrderItemRelationship": [
                {
                    "id": "e3c5d895-5377-4882-bd5b-bd0197a554b9",
                    "relationshipType": "isSold"
                },
                {
                    "id": "4c5db0d5-b526-49bd-8724-0cebe1da1f80",
                    "relationshipType": "reliesOn"
                }
            ],
            "state": "draft",
            "@type": "ProductOrderItem"
        },
        {
            "id": "b9380c7a-d04f-4830-af7a-c18e5268034f",
            "quantity": 1,
            "action": "add",
            "productOffering": {
                "id": "a52ed0ff-e1a1-45de-822a-9db878b0e4fc",
                "name": "SIM Card",
                "@type": "AtomicProductOffering"
            },
            "productOrderItemRelationship": [
                {
                    "id": "789d430f-18a5-4317-b1bc-a70d4c087846",
                    "relationshipType": "isChild"
                },
                {
                    "id": "8598c10f-a60b-489d-ab00-67fb5c3e7b7d",
                    "relationshipType": "sells"
                }
            ],
            "state": "draft",
            "@type": "ProductOrderItem"
        },
        {
            "id": "8598c10f-a60b-489d-ab00-67fb5c3e7b7d",
            "quantity": 1,
            "action": "add",
            "product": {
                "isBundle": false,
                "productCharacteristic": [
                    {
                        "name": "IMSI",
                        "valueType": "string",
                        "value": "310478356879098",
                        "@type": "StringCharacteristic",
                        "id": "004"
                    }
                ],
                "productSpecification": {
                    "id": "df32402e-ceb9-4467-aafd-fec0bbff3124",
                    "name": "SIM Card",
                    "@type": "ProductSpecificationRef"
                },
                "realizingResource": [
                    {
                        "id": "12x",
                        "@type": "Resource"
                    }
                ],
                "@type": "Product"
            },
            "productOrderItemRelationship": [
                {
                    "id": "b9380c7a-d04f-4830-af7a-c18e5268034f",
                    "relationshipType": "isSold"
                }
            ],
            "state": "draft",
            "@type": "ProductOrderItem"
        }
    ],
    "relatedParty": [
        {
            "id": "227-mf30",
            "name": "Lisa",
            "role": "customer",
            "@referredType": "individual"
        }
    ],
    "state": "draft",
    "@type": "ProductOrder"
};


// Controller function to handle the POST request for process flow
const processFlow = (req, res) => {
    res.status(200).json(mockProcessFlowResponse);
};

const confirmConfiguration = (req,res) => {
    res.status(200).json(mockedConfResponse)
}

const validateOrder = (req, res) => {
    res.status(200).json(mockedValidateResponse);
};


module.exports = {
  processFlow,confirmConfiguration,mockedValidateResponse,
};
