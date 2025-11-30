---
title: SteamGameServer
---

# Class SteamGameServer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L5)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class SteamGameServer
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SteamGameServer](/docs/api/steamapi/steamgameserver)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### AssociateWithClan(CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L370)

<p> Server clan association</p>
<p> associate this game server with this clan for the purposes of computing player compat</p>

```csharp
public static SteamAPICall_t AssociateWithClan(CSteamID steamIDClan)
```

#### Parameters

- **steamIDClan**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### BLoggedOn()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L87)

<p> status functions</p>

```csharp
public static bool BLoggedOn()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BSecure()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L92)

```csharp
public static bool BSecure()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BUpdateUserData(CSteamID, string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L428)

<p> Update the data to be displayed in the server browser and matchmaking interfaces for a user</p>
<p> currently connected to the server.  For regular users you must call this after you receive a</p>
<p> GSUserValidationSuccess callback.</p>
<p> Return Value: true if successful, false if failure (ie, steamIDUser wasn't for an active player)</p>

```csharp
public static bool BUpdateUserData(CSteamID steamIDUser, string pchPlayerName, uint uScore)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)
- **pchPlayerName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **uScore**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BeginAuthSession(byte[], int, CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L276)

<p> Authenticate ticket ( from GetAuthSessionTicket ) from entity steamID to be sure it is valid and isnt reused</p>
<p> Registers for callbacks if the entity goes offline or cancels the ticket ( see ValidateAuthTicketResponse_t callback and EAuthSessionResponse )</p>

```csharp
public static EBeginAuthSessionResult BeginAuthSession(byte[] pAuthTicket, int cbAuthTicket, CSteamID steamID)
```

#### Parameters

- **pAuthTicket**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cbAuthTicket**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **steamID**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [EBeginAuthSessionResult](/docs/api/steamapi/ebeginauthsessionresult)

### CancelAuthTicket(HAuthTicket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L292)

<p> Cancel auth ticket from GetAuthSessionTicket, called when no longer playing game with the entity you gave the ticket to</p>

```csharp
public static void CancelAuthTicket(HAuthTicket hAuthTicket)
```

#### Parameters

- **hAuthTicket**: [HAuthTicket](/docs/api/steamapi/hauthticket)

### ClearAllKeyValues()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L193)

<p>/ Call this to clear the whole list of key/values that are sent in rules queries.</p>

```csharp
public static void ClearAllKeyValues()
```

### ComputeNewPlayerCompatibility(CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L378)

<p> ask if any of the current players dont want to play with this new player - or vice versa</p>

```csharp
public static SteamAPICall_t ComputeNewPlayerCompatibility(CSteamID steamIDNewPlayer)
```

#### Parameters

- **steamIDNewPlayer**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### CreateUnauthenticatedUserConnection()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L405)

<p> Creates a fake user (ie, a bot) which will be listed as playing on the server, but skips validation.</p>
<p> Return Value: Returns a SteamID for the user to be tracked with, you should call EndAuthSession()</p>
<p> when this user leaves the server just like you would for a real user.</p>

```csharp
public static CSteamID CreateUnauthenticatedUserConnection()
```

#### Returns

- [CSteamID](/docs/api/steamapi/csteamid)

### EndAuthSession(CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L284)

<p> Stop tracking started by BeginAuthSession - called when no longer playing game with this entity</p>

```csharp
public static void EndAuthSession(CSteamID steamID)
```

#### Parameters

- **steamID**: [CSteamID](/docs/api/steamapi/csteamid)

### GetAuthSessionTicket(byte[], int, out uint, ref SteamNetworkingIdentity)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L267)

<p> Player list management / authentication.</p>
<p> Retrieve ticket to be sent to the entity who wishes to authenticate you ( using BeginAuthSession API ).</p>
<p> pcbTicket retrieves the length of the actual ticket.</p>
<p> SteamNetworkingIdentity is an optional parameter to hold the public IP address of the entity you are connecting to</p>
<p> if an IP address is passed Steam will only allow the ticket to be used by an entity with that IP address</p>

```csharp
public static HAuthTicket GetAuthSessionTicket(byte[] pTicket, int cbMaxTicket, out uint pcbTicket, ref SteamNetworkingIdentity pSnid)
```

#### Parameters

- **pTicket**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cbMaxTicket**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pcbTicket**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pSnid**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)

#### Returns

- [HAuthTicket](/docs/api/steamapi/hauthticket)

### GetGameplayStats()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L319)

<p> these two functions s are deprecated, and will not return results</p>
<p> they will be removed in a future version of the SDK</p>

```csharp
public static void GetGameplayStats()
```

### GetNextOutgoingPacket(byte[], int, out uint, out ushort)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L361)

<p> AFTER calling HandleIncomingPacket for any packets that came in that frame, call this.</p>
<p> This gets a packet that the master server updater needs to send out on UDP.</p>
<p> It returns the length of the packet it wants to send, or 0 if there are no more packets to send.</p>
<p> Call this each frame until it returns 0.</p>

```csharp
public static int GetNextOutgoingPacket(byte[] pOut, int cbMaxOut, out uint pNetAdr, out ushort pPort)
```

#### Parameters

- **pOut**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cbMaxOut**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pNetAdr**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetPublicIP()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L334)

<p> Returns the public IP of the server according to Steam, useful when the server is</p>
<p> behind NAT and you want to advertise its IP in a lobby for other clients to directly</p>
<p> connect to</p>

```csharp
public static SteamIPAddress_t GetPublicIP()
```

#### Returns

- [SteamIPAddress_t](/docs/api/steamapi/steamipaddress_t)

### GetServerReputation()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L324)

```csharp
public static SteamAPICall_t GetServerReputation()
```

#### Returns

- [SteamAPICall_t](/docs/api/steamapi/steamapicall_t)

### GetSteamID()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L97)

```csharp
public static CSteamID GetSteamID()
```

#### Returns

- [CSteamID](/docs/api/steamapi/csteamid)

### HandleIncomingPacket(byte[], int, uint, ushort)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L350)

<p> Server browser related query packet processing for shared socket mode.  These are used</p>
<p> when you pass STEAMGAMESERVER_QUERY_PORT_SHARED as the query port to SteamGameServer_Init.</p>
<p> IP address and port are in host order, i.e 127.0.0.1 == 0x7f000001</p>
<p> These are used when you've elected to multiplex the game server's UDP socket</p>
<p> rather than having the master server updater use its own sockets.</p>
<p> Source games use this to simplify the job of the server admins, so they</p>
<p> don't have to open up more ports on their firewalls.</p>
<p> Call this when a packet that starts with 0xFFFFFFFF comes in. That means</p>
<p> it's for us.</p>

```csharp
public static bool HandleIncomingPacket(byte[] pData, int cbData, uint srcIP, ushort srcPort)
```

#### Parameters

- **pData**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cbData**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **srcIP**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **srcPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LogOff()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L79)

<p>/ Begin process of logging game server out of steam</p>

```csharp
public static void LogOff()
```

### LogOn(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L58)

<p> Login</p>
<p>/ Begin process to login to a persistent game server account</p>
<p>/</p>
<p>/ You need to register for callbacks to determine the result of this operation.</p>
<p>/ @see SteamServersConnected_t</p>
<p>/ @see SteamServerConnectFailure_t</p>
<p>/ @see SteamServersDisconnected_t</p>

```csharp
public static void LogOn(string pszToken)
```

#### Parameters

- **pszToken**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### LogOnAnonymous()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L71)

<p>/ Login to a generic, anonymous account.</p>
<p>/</p>
<p>/ Note: in previous versions of the SDK, this was automatically called within SteamGameServer_Init,</p>
<p>/ but this is no longer the case.</p>

```csharp
public static void LogOnAnonymous()
```

### RequestUserGroupStatus(CSteamID, CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L310)

<p> Ask if a user in in the specified group, results returns async by GSUserGroupStatus_t</p>
<p> returns false if we're not connected to the steam servers and thus cannot ask</p>

```csharp
public static bool RequestUserGroupStatus(CSteamID steamIDUser, CSteamID steamIDGroup)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)
- **steamIDGroup**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SendUserConnectAndAuthenticate_DEPRECATED(uint, byte[], uint, out CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L395)

<p> Handles receiving a new connection from a Steam user.  This call will ask the Steam</p>
<p> servers to validate the users identity, app ownership, and VAC status.  If the Steam servers</p>
<p> are off-line, then it will validate the cached ticket itself which will validate app ownership</p>
<p> and identity.  The AuthBlob here should be acquired on the game client using SteamUser()-&gt;InitiateGameConnection()</p>
<p> and must then be sent up to the game server for authentication.</p>
<p> Return Value: returns true if the users ticket passes basic checks. pSteamIDUser will contain the Steam ID of this user. pSteamIDUser must NOT be NULL</p>
<p> If the call succeeds then you should expect a GSClientApprove_t or GSClientDeny_t callback which will tell you whether authentication</p>
<p> for the user has succeeded or failed (the steamid in the callback will match the one returned by this call)</p>
<p> DEPRECATED!  This function will be removed from the SDK in an upcoming version.</p>
<p>              Please migrate to BeginAuthSession and related functions.</p>

```csharp
public static bool SendUserConnectAndAuthenticate_DEPRECATED(uint unIPClient, byte[] pvAuthBlob, uint cubAuthBlobSize, out CSteamID pSteamIDUser)
```

#### Parameters

- **unIPClient**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pvAuthBlob**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubAuthBlobSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pSteamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SendUserDisconnect_DEPRECATED(CSteamID)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L417)

<p> Should be called whenever a user leaves our game server, this lets Steam internally</p>
<p> track which users are currently on which servers for the purposes of preventing a single</p>
<p> account being logged into multiple servers, showing who is currently on a server, etc.</p>
<p> DEPRECATED!  This function will be removed from the SDK in an upcoming version.</p>
<p>              Please migrate to BeginAuthSession and related functions.</p>

```csharp
public static void SendUserDisconnect_DEPRECATED(CSteamID steamIDUser)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/steamapi/csteamid)

### SetAdvertiseServerActive(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L255)

<p>/ Indicate whether you wish to be listed on the master server list</p>
<p>/ and/or respond to server browser / LAN discovery packets.</p>
<p>/ The server starts with this value set to false.  You should set all</p>
<p>/ relevant server parameters before enabling advertisement on the server.</p>
<p>/</p>
<p>/ (This function used to be named EnableHeartbeats, so if you are wondering</p>
<p>/ where that function went, it's right here.  It does the same thing as before,</p>
<p>/ the old name was just confusing.)</p>

```csharp
public static void SetAdvertiseServerActive(bool bActive)
```

#### Parameters

- **bActive**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetBotPlayerCount(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L123)

<p>/ Number of bots.  Default value is zero</p>

```csharp
public static void SetBotPlayerCount(int cBotplayers)
```

#### Parameters

- **cBotplayers**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetDedicatedServer(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L44)

<p>/ Is this is a dedicated server?  The default value is false.</p>

```csharp
public static void SetDedicatedServer(bool bDedicated)
```

#### Parameters

- **bDedicated**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetGameData(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L228)

<p>/ Sets a string defining the "gamedata" for this server, this is optional, but if it is set</p>
<p>/ it allows users to filter in the matchmaking/server-browser interfaces based on the value</p>
<p>/</p>
<p>/ @see k_cbMaxGameServerGameData</p>

```csharp
public static void SetGameData(string pchGameData)
```

#### Parameters

- **pchGameData**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetGameDescription(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L21)

<p>/ Description of the game.  This is a required field and is displayed in the steam server browser....for now.</p>
<p>/ This is a required field, but it will go away eventually, as the data should be determined from the AppID.</p>

```csharp
public static void SetGameDescription(string pszGameDescription)
```

#### Parameters

- **pszGameDescription**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetGameTags(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L215)

<p>/ Sets a string defining the "gametags" for this server, this is optional, but if it is set</p>
<p>/ it allows users to filter in the matchmaking/server-browser interfaces based on the value</p>
<p>/</p>
<p>/ @see k_cbMaxGameServerTags</p>

```csharp
public static void SetGameTags(string pchGameTags)
```

#### Parameters

- **pchGameTags**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetKeyValue(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L201)

<p>/ Call this to add/update a key/value pair.</p>

```csharp
public static void SetKeyValue(string pKey, string pValue)
```

#### Parameters

- **pKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetMapName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L145)

<p>/ Set name of map to report in the server browser</p>
<p>/</p>
<p>/ @see k_cbMaxGameServerMapName</p>

```csharp
public static void SetMapName(string pszMapName)
```

#### Parameters

- **pszMapName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetMaxPlayerCount(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L115)

<p> Server state.  These properties may be changed at any time.</p>
<p>/ Max player count that will be reported to server browser and client queries</p>

```csharp
public static void SetMaxPlayerCount(int cPlayersMax)
```

#### Parameters

- **cPlayersMax**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetModDir(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L34)

<p>/ If your game is a "mod," pass the string that identifies it.  The default is an empty string, meaning</p>
<p>/ this application is the original game, not a mod.</p>
<p>/</p>
<p>/ @see k_cbMaxGameServerGameDir</p>

```csharp
public static void SetModDir(string pszModDir)
```

#### Parameters

- **pszModDir**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetPasswordProtected(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L155)

<p>/ Let people know if your server will require a password</p>

```csharp
public static void SetPasswordProtected(bool bPasswordProtected)
```

#### Parameters

- **bPasswordProtected**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetProduct(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L10)

<p>/ Game product identifier.  This is currently used by the master server for version checking purposes.</p>
<p>/ It's a required field, but will eventually will go away, and the AppID will be used for this purpose.</p>

```csharp
public static void SetProduct(string pszProduct)
```

#### Parameters

- **pszProduct**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetRegion(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L238)

<p>/ Region identifier.  This is an optional field, the default value is empty, meaning the "world" region</p>

```csharp
public static void SetRegion(string pszRegion)
```

#### Parameters

- **pszRegion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetServerName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L133)

<p>/ Set the name of server as it will appear in the server browser</p>
<p>/</p>
<p>/ @see k_cbMaxGameServerName</p>

```csharp
public static void SetServerName(string pszServerName)
```

#### Parameters

- **pszServerName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetSpectatorPort(ushort)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L173)

<p>/ Spectator server port to advertise.  The default value is zero, meaning the</p>
<p>/ service is not used.  If your server receives any info requests on the LAN,</p>
<p>/ this is the value that will be placed into the reply for such local queries.</p>
<p>/</p>
<p>/ This is also the value that will be advertised by the master server.</p>
<p>/ The only exception is if your server is using a FakeIP.  Then then the second</p>
<p>/ fake port number (index 1) assigned to your server will be listed on the master</p>
<p>/ server as the spectator port, if you set this value to any nonzero value.</p>
<p>/</p>
<p>/ This function merely controls the values that are advertised -- it's up to you to</p>
<p>/ configure the server to actually listen on this port and handle any spectator traffic</p>

```csharp
public static void SetSpectatorPort(ushort unSpectatorPort)
```

#### Parameters

- **unSpectatorPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SetSpectatorServerName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L183)

<p>/ Name of the spectator server.  (Only used if spectator port is nonzero.)</p>
<p>/</p>
<p>/ @see k_cbMaxGameServerMapName</p>

```csharp
public static void SetSpectatorServerName(string pszSpectatorServerName)
```

#### Parameters

- **pszSpectatorServerName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### UserHasLicenseForApp(CSteamID, AppId_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L301)

<p> After receiving a user's authentication data, and passing it to SendUserConnectAndAuthenticate, use this function</p>
<p> to determine if the user owns downloadable content specified by the provided AppID.</p>

```csharp
public static EUserHasLicenseForAppResult UserHasLicenseForApp(CSteamID steamID, AppId_t appID)
```

#### Parameters

- **steamID**: [CSteamID](/docs/api/steamapi/csteamid)
- **appID**: [AppId_t](/docs/api/steamapi/appid_t)

#### Returns

- [EUserHasLicenseForAppResult](/docs/api/steamapi/euserhaslicenseforappresult)

### WasRestartRequested()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L106)

<p>/ Returns true if the master server has requested a restart.</p>
<p>/ Only returns true once per request.</p>

```csharp
public static bool WasRestartRequested()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

