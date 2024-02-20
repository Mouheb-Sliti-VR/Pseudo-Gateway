// Mock response data for process flow
const mockProcessFlowResponse = {
    "id": "2358554f-c484-4922-b390-a5ced1168dcb",
    "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/2358554f-c484-4922-b390-a5ced1168dcb",
    "correlationId": null,
    "processFlowDate": "2024-02-19T13:34:36.037141869Z",
    "processFlowSpecification": "OrderCapture",
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
    "characteristic": [],
    "relatedEntity": [
        {
            "id": "5fe032f0-fa01-42ec-afeb-920f74c2eae3",
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
    "taskFlow": null,
    "@baseType": null,
    "@schemaLocation": null,
    "@type": "ProcessFlow",
    "_links": {
        "self": {
            "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/2358554f-c484-4922-b390-a5ced1168dcb"
        },
        "taskFlowList": {
            "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/2358554f-c484-4922-b390-a5ced1168dcb/taskFlow"
        },
        "nextTaskstoBePerformed": [
            {
                "title": "OrderCapture.cancelOrder",
                "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/2358554f-c484-4922-b390-a5ced1168dcb/taskFlow/1e3ae4b2-cec1-4688-b0b6-29c8bbcab861",
                "state": "active",
                "taskFlowSpecificationId": "1e3ae4b2-cec1-4688-b0b6-29c8bbcab861",
                "taskFlowSpecificationCharacteristic": null,
                "method": "PATCH",
                "accepts": "merge-json-patch"
            },
            {
                "title": "OrderCapture.confirmConfiguration",
                "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/2358554f-c484-4922-b390-a5ced1168dcb/taskFlow/42ce9714-26d6-4ae7-becb-32d5440a090d",
                "state": "active",
                "taskFlowSpecificationId": "42ce9714-26d6-4ae7-becb-32d5440a090d",
                "taskFlowSpecificationCharacteristic": [
                    {
                        "name": "ConfirmConfigurationIsProcessed",
                        "id": "42ce9714-26d6-4ae7-becb-32d5440a090d-ConfirmConfigurationIsProcessed",
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
        "id": "dbb03aa4-4295-4a3a-975a-0d7e6685e50f",
        "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/56f586df-e27f-4e45-96c6-2a304df89854/taskFlow/dbb03aa4-4295-4a3a-975a-0d7e6685e50f",
        "correlationId": null,
        "completionMethod": null,
        "isMandatory": null,
        "priority": 50,
        "taskFlowSpecification": "confirmConfiguration",
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
                "id": "65d4649b9d6c4567d4b6da3f",
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
                "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/56f586df-e27f-4e45-96c6-2a304df89854/taskFlow/dbb03aa4-4295-4a3a-975a-0d7e6685e50f"
            },
            "taskFlowList": {
                "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/56f586df-e27f-4e45-96c6-2a304df89854/taskFlow"
            },
            "nextTaskstoBePerformed": [
                {
                    "title": "OrderCapture.cancelOrder",
                    "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/56f586df-e27f-4e45-96c6-2a304df89854/taskFlow/f2ab8dbc-1741-49fa-9d04-dc729bd6f3f3",
                    "state": "active",
                    "taskFlowSpecificationId": "f2ab8dbc-1741-49fa-9d04-dc729bd6f3f3",
                    "taskFlowSpecificationCharacteristic": null,
                    "method": "PATCH",
                    "accepts": "merge-json-patch"
                },
                {
                    "title": "OrderCapture.validateOrder",
                    "href": "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/56f586df-e27f-4e45-96c6-2a304df89854/taskFlow/c26147df-e0a6-426a-b7f4-f39a54d514f0",
                    "state": "active",
                    "taskFlowSpecificationId": "c26147df-e0a6-426a-b7f4-f39a54d514f0",
                    "taskFlowSpecificationCharacteristic": [
                        {
                            "name": "ValidateOrderByCustomer",
                            "id": "c26147df-e0a6-426a-b7f4-f39a54d514f0-ValidateOrderByCustomer",
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




// Controller function to handle the POST request for process flow
const processFlow = (req, res) => {
    res.status(200).json(mockProcessFlowResponse);
};




const confirmConfiguration = (req,res) => {
    res.status(200).json(mockedConfResponse)
}

module.exports = {
  processFlow,confirmConfiguration
};
