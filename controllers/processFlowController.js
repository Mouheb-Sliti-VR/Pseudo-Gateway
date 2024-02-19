// controllers/processFlowController.js

// Mock response data for process flow
const mockProcessFlowResponse = {
  id: "2358554f-c484-4922-b390-a5ced1168dcb",
  href: "https://om-order-capture-staging.apps.fr01.paas.tech.orange/processManagement/v1/processFlow/2358554f-c484-4922-b390-a5ced1168dcb",
  correlationId: null,
  processFlowDate: new Date().toISOString(),
  processFlowSpecification: "OrderCapture",
  description: null,
  channel: [
      {
          id: "004",
          name: "METAVERSE",
          "@baseType": null,
          "@schemaLocation": null,
          "@type": null,
          "@referredType": null
      }
  ],
  characteristic: [],
  relatedEntity: [
      {
          id: "Product_ID",
          name: null,
          role: null,
          "@baseType": null,
          "@schemaLocation": null,
          "@type": null,
          "@referredType": "productOffering"
      }
  ],
  relatedParty: [
      {
          id: "ORANGE_ID",
          name: "username",
          role: "customer",
          "@baseType": null,
          "@schemaLocation": null,
          "@type": null,
          "@referredType": "individual"
      }
  ],
  state: "active",
  taskFlow: null,
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

// Controller function to handle the POST request for process flow
const processFlow = (req, res) => {
  // Extract necessary data from the request body
  const { ID_ORANGE, username, productId } = req.body;

  // Modify the mock response data with the received data
  const response = {
      ...mockProcessFlowResponse,
      relatedEntity: [
          {
              ...mockProcessFlowResponse.relatedEntity[0],
              id: productId,
          }
      ],
      relatedParty: [
          {
              ...mockProcessFlowResponse.relatedParty[0],
              id: ID_ORANGE,
              name: username,
          }
      ]
  };

  // Send the modified mock response data
  res.status(200).json(response);
};

module.exports = {
  processFlow,
};
