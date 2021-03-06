import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export declare enum ConnectedServiceKind {
    /**
    * Custom or unknown service
    */
    Custom = 0,
    /**
    * Azure Subscription
    */
    AzureSubscription = 1,
    /**
    * Chef Connection
    */
    Chef = 2,
    /**
    * Generic Connection
    */
    Generic = 3,
}
export interface IdentityData {
    identityIds: string[];
}
export declare enum ProjectChangeType {
    Modified = 0,
    Deleted = 1,
    Added = 2,
}
/**
* Contains information of the project
*/
export interface ProjectInfo {
    abbreviation: string;
    description: string;
    id: string;
    lastUpdateTime: Date;
    name: string;
    properties: ProjectProperty[];
    /**
    * Current revision of the project
    */
    revision: number;
    state: any;
    uri: string;
    version: number;
}
export interface ProjectMessage {
    project: ProjectInfo;
    projectChangeType: ProjectChangeType;
}
export interface ProjectProperty {
    name: string;
    value: string;
}
export interface Proxy {
    /**
    * This is a description string
    */
    description: string;
    /**
    * The friendly name of the server
    */
    friendlyName: string;
    globalDefault: boolean;
    /**
    * This is a string representation of the site that the proxy server is located in (e.g. &quot;NA-WA-RED&quot;)
    */
    site: string;
    siteDefault: boolean;
    /**
    * The URL of the proxy server
    */
    url: string;
}
export declare enum SourceControlTypes {
    Tfvc = 1,
    Git = 2,
}
/**
* The Team Context for an operation.
*/
export interface TeamContext {
    /**
    * The team project Id or name.  Ignored if ProjectId is set.
    */
    project: string;
    /**
    * The Team Project ID.  Required if Project is not set.
    */
    projectId: string;
    /**
    * The Team Id or name.  Ignored if TeamId is set.
    */
    team: string;
    /**
    * The Team Id
    */
    teamId: string;
}
/**
* Represents a Team Project object.
*/
export interface TeamProject extends TeamProjectReference {
    /**
    * The links to other objects related to this object.
    */
    _links: any;
    capabilities: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
    * The shallow ref to the default team.
    */
    defaultTeam: WebApiTeamRef;
}
/**
* Data contract for a TeamProjectCollection.
*/
export interface TeamProjectCollection extends TeamProjectCollectionReference {
    /**
    * The links to other objects related to this object.
    */
    _links: any;
    /**
    * Project collection description.
    */
    description: string;
    /**
    * Project collection state.
    */
    state: string;
}
/**
* Reference object for a TeamProjectCollection.
*/
export interface TeamProjectCollectionReference {
    /**
    * Collection Id.
    */
    id: string;
    /**
    * Collection Name.
    */
    name: string;
    /**
    * Collection REST Url.
    */
    url: string;
}
/**
* Represents a shallow reference to a TeamProject.
*/
export interface TeamProjectReference {
    /**
    * Project abbreviation.
    */
    abbreviation: string;
    /**
    * The project's description (if any).
    */
    description: string;
    /**
    * Project identifier.
    */
    id: string;
    /**
    * Project name.
    */
    name: string;
    /**
    * Project revision.
    */
    revision: number;
    /**
    * Project state.
    */
    state: any;
    /**
    * Url to the full version of the object.
    */
    url: string;
}
export interface WebApiConnectedService extends WebApiConnectedServiceRef {
    /**
    * The user who did the OAuth authentication to created this service
    */
    authenticatedBy: VSS_Common_Contracts.IdentityRef;
    /**
    * Extra description on the service.
    */
    description: string;
    /**
    * Friendly Name of service connection
    */
    friendlyName: string;
    /**
    * Id/Name of the connection service. For Ex: Subscription Id for Azure Connection
    */
    id: string;
    /**
    * The kind of service.
    */
    kind: string;
    /**
    * The project associated with this service
    */
    project: TeamProjectReference;
    /**
    * Optional uri to connect directly to the service such as https://windows.azure.com
    */
    serviceUri: string;
}
export interface WebApiConnectedServiceDetails extends WebApiConnectedServiceRef {
    /**
    * Meta data for service connection
    */
    connectedServiceMetaData: WebApiConnectedService;
    /**
    * Credential info
    */
    credentialsXml: string;
    /**
    * Optional uri to connect directly to the service such as https://windows.azure.com
    */
    endPoint: string;
}
export interface WebApiConnectedServiceRef {
    id: string;
    url: string;
}
/**
* The representation of data needed to create a tag definition which is sent across the wire.
*/
export interface WebApiCreateTagRequestData {
    name: string;
}
export interface WebApiProject extends TeamProjectReference {
    /**
    * Set of capabilities this project has
    */
    capabilities: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
    * Reference to collection which contains this project
    */
    collection: WebApiProjectCollectionRef;
    /**
    * Default team for this project
    */
    defaultTeam: WebApiTeamRef;
}
export interface WebApiProjectCollection extends WebApiProjectCollectionRef {
    /**
    * Project collection description
    */
    description: string;
    /**
    * Project collection state
    */
    state: string;
}
export interface WebApiProjectCollectionRef {
    /**
    * Collection Tfs Url (Host Url)
    */
    collectionUrl: string;
    /**
    * Collection Guid
    */
    id: string;
    /**
    * Collection Name
    */
    name: string;
    /**
    * Collection REST Url
    */
    url: string;
}
/**
* The representation of a tag definition which is sent across the wire.
*/
export interface WebApiTagDefinition {
    active: boolean;
    id: string;
    name: string;
    url: string;
}
export interface WebApiTeam extends WebApiTeamRef {
    /**
    * Team description
    */
    description: string;
    /**
    * Identity REST API Url to this team
    */
    identityUrl: string;
}
export interface WebApiTeamRef {
    /**
    * Team (Identity) Guid. A Team Foundation ID.
    */
    id: string;
    /**
    * Team name
    */
    name: string;
    /**
    * Team REST API Url
    */
    url: string;
}
export declare var TypeInfo: {
    ConnectedServiceKind: {
        enumValues: {
            "custom": number;
            "azureSubscription": number;
            "chef": number;
            "generic": number;
        };
    };
    IdentityData: {
        fields: any;
    };
    ProjectChangeType: {
        enumValues: {
            "modified": number;
            "deleted": number;
            "added": number;
        };
    };
    ProjectInfo: {
        fields: any;
    };
    ProjectMessage: {
        fields: any;
    };
    ProjectProperty: {
        fields: any;
    };
    Proxy: {
        fields: any;
    };
    SourceControlTypes: {
        enumValues: {
            "tfvc": number;
            "git": number;
        };
    };
    TeamContext: {
        fields: any;
    };
    TeamProject: {
        fields: any;
    };
    TeamProjectCollection: {
        fields: any;
    };
    TeamProjectCollectionReference: {
        fields: any;
    };
    TeamProjectReference: {
        fields: any;
    };
    WebApiConnectedService: {
        fields: any;
    };
    WebApiConnectedServiceDetails: {
        fields: any;
    };
    WebApiConnectedServiceRef: {
        fields: any;
    };
    WebApiCreateTagRequestData: {
        fields: any;
    };
    WebApiProject: {
        fields: any;
    };
    WebApiProjectCollection: {
        fields: any;
    };
    WebApiProjectCollectionRef: {
        fields: any;
    };
    WebApiTagDefinition: {
        fields: any;
    };
    WebApiTeam: {
        fields: any;
    };
    WebApiTeamRef: {
        fields: any;
    };
};
