---
title: SteamGameServer
---

```csharp
public static class SteamGameServer
```

#### Inheritance

#### Inherited Members

## Methods

### AssociateWithClan(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L370)

```csharp
public static SteamAPICall_t AssociateWithClan(CSteamID steamIDClan)
```

#### Parameters

- **steamIDClan**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### BLoggedOn()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L87)

```csharp
public static bool BLoggedOn()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BSecure()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L92)

```csharp
public static bool BSecure()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BUpdateUserData(CSteamID, string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L428)

```csharp
public static bool BUpdateUserData(CSteamID steamIDUser, string pchPlayerName, uint uScore)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pchPlayerName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **uScore**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BeginAuthSession(byte[], int, CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L276)

```csharp
public static EBeginAuthSessionResult BeginAuthSession(byte[] pAuthTicket, int cbAuthTicket, CSteamID steamID)
```

#### Parameters

- **pAuthTicket**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cbAuthTicket**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **steamID**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [EBeginAuthSessionResult](/docs/api/shared/steamapi/ebeginauthsessionresult)

### CancelAuthTicket(HAuthTicket)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L292)

```csharp
public static void CancelAuthTicket(HAuthTicket hAuthTicket)
```

#### Parameters

- **hAuthTicket**: [HAuthTicket](/docs/api/shared/steamapi/hauthticket)

### ClearAllKeyValues()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L193)

```csharp
public static void ClearAllKeyValues()
```

### ComputeNewPlayerCompatibility(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L378)

```csharp
public static SteamAPICall_t ComputeNewPlayerCompatibility(CSteamID steamIDNewPlayer)
```

#### Parameters

- **steamIDNewPlayer**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### CreateUnauthenticatedUserConnection()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L405)

```csharp
public static CSteamID CreateUnauthenticatedUserConnection()
```

#### Returns

- [CSteamID](/docs/api/shared/steamapi/csteamid)

### EndAuthSession(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L284)

```csharp
public static void EndAuthSession(CSteamID steamID)
```

#### Parameters

- **steamID**: [CSteamID](/docs/api/shared/steamapi/csteamid)

### GetAuthSessionTicket(byte[], int, out uint, ref SteamNetworkingIdentity)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L267)

```csharp
public static HAuthTicket GetAuthSessionTicket(byte[] pTicket, int cbMaxTicket, out uint pcbTicket, ref SteamNetworkingIdentity pSnid)
```

#### Parameters

- **pTicket**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cbMaxTicket**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pcbTicket**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pSnid**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)

#### Returns

- [HAuthTicket](/docs/api/shared/steamapi/hauthticket)

### GetGameplayStats()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L319)

```csharp
public static void GetGameplayStats()
```

### GetNextOutgoingPacket(byte[], int, out uint, out ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L361)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L334)

```csharp
public static SteamIPAddress_t GetPublicIP()
```

#### Returns

- [SteamIPAddress_t](/docs/api/shared/steamapi/steamipaddress_t)

### GetServerReputation()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L324)

```csharp
public static SteamAPICall_t GetServerReputation()
```

#### Returns

- [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

### GetSteamID()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L97)

```csharp
public static CSteamID GetSteamID()
```

#### Returns

- [CSteamID](/docs/api/shared/steamapi/csteamid)

### HandleIncomingPacket(byte[], int, uint, ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L350)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L79)

```csharp
public static void LogOff()
```

### LogOn(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L58)

```csharp
public static void LogOn(string pszToken)
```

#### Parameters

- **pszToken**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### LogOnAnonymous()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L71)

```csharp
public static void LogOnAnonymous()
```

### RequestUserGroupStatus(CSteamID, CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L310)

```csharp
public static bool RequestUserGroupStatus(CSteamID steamIDUser, CSteamID steamIDGroup)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **steamIDGroup**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SendUserConnectAndAuthenticate_DEPRECATED(uint, byte[], uint, out CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L395)

```csharp
public static bool SendUserConnectAndAuthenticate_DEPRECATED(uint unIPClient, byte[] pvAuthBlob, uint cubAuthBlobSize, out CSteamID pSteamIDUser)
```

#### Parameters

- **unIPClient**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pvAuthBlob**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubAuthBlobSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pSteamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SendUserDisconnect_DEPRECATED(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L417)

```csharp
public static void SendUserDisconnect_DEPRECATED(CSteamID steamIDUser)
```

#### Parameters

- **steamIDUser**: [CSteamID](/docs/api/shared/steamapi/csteamid)

### SetAdvertiseServerActive(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L255)

```csharp
public static void SetAdvertiseServerActive(bool bActive)
```

#### Parameters

- **bActive**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetBotPlayerCount(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L123)

```csharp
public static void SetBotPlayerCount(int cBotplayers)
```

#### Parameters

- **cBotplayers**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetDedicatedServer(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L44)

```csharp
public static void SetDedicatedServer(bool bDedicated)
```

#### Parameters

- **bDedicated**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetGameData(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L228)

```csharp
public static void SetGameData(string pchGameData)
```

#### Parameters

- **pchGameData**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetGameDescription(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L21)

```csharp
public static void SetGameDescription(string pszGameDescription)
```

#### Parameters

- **pszGameDescription**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetGameTags(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L215)

```csharp
public static void SetGameTags(string pchGameTags)
```

#### Parameters

- **pchGameTags**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetKeyValue(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L201)

```csharp
public static void SetKeyValue(string pKey, string pValue)
```

#### Parameters

- **pKey**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetMapName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L145)

```csharp
public static void SetMapName(string pszMapName)
```

#### Parameters

- **pszMapName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetMaxPlayerCount(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L115)

```csharp
public static void SetMaxPlayerCount(int cPlayersMax)
```

#### Parameters

- **cPlayersMax**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetModDir(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L34)

```csharp
public static void SetModDir(string pszModDir)
```

#### Parameters

- **pszModDir**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetPasswordProtected(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L155)

```csharp
public static void SetPasswordProtected(bool bPasswordProtected)
```

#### Parameters

- **bPasswordProtected**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetProduct(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L10)

```csharp
public static void SetProduct(string pszProduct)
```

#### Parameters

- **pszProduct**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetRegion(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L238)

```csharp
public static void SetRegion(string pszRegion)
```

#### Parameters

- **pszRegion**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetServerName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L133)

```csharp
public static void SetServerName(string pszServerName)
```

#### Parameters

- **pszServerName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetSpectatorPort(ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L173)

```csharp
public static void SetSpectatorPort(ushort unSpectatorPort)
```

#### Parameters

- **unSpectatorPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SetSpectatorServerName(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L183)

```csharp
public static void SetSpectatorServerName(string pszSpectatorServerName)
```

#### Parameters

- **pszSpectatorServerName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### UserHasLicenseForApp(CSteamID, AppId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L301)

```csharp
public static EUserHasLicenseForAppResult UserHasLicenseForApp(CSteamID steamID, AppId_t appID)
```

#### Parameters

- **steamID**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **appID**: [AppId_t](/docs/api/shared/steamapi/appid_t)

#### Returns

- [EUserHasLicenseForAppResult](/docs/api/shared/steamapi/euserhaslicenseforappresult)

### WasRestartRequested()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserver.cs#L106)

```csharp
public static bool WasRestartRequested()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

