---
title: SteamGameServerNetworkingSockets
---

```csharp
public static class SteamGameServerNetworkingSockets
```

#### Inheritance

#### Inherited Members

## Methods

### AcceptConnection(HSteamNetConnection)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L151)

```csharp
public static EResult AcceptConnection(HSteamNetConnection hConn)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

#### Returns

- [EResult](/docs/api/shared/steamapi/eresult)

### BeginAsyncRequestFakeIP(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L1018)

```csharp
public static bool BeginAsyncRequestFakeIP(int nNumPorts)
```

#### Parameters

- **nNumPorts**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseConnection(HSteamNetConnection, int, string, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L179)

```csharp
public static bool CloseConnection(HSteamNetConnection hPeer, int nReason, string pszDebug, bool bEnableLinger)
```

#### Parameters

- **hPeer**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **nReason**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pszDebug**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **bEnableLinger**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseListenSocket(HSteamListenSocket)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L190)

```csharp
public static bool CloseListenSocket(HSteamListenSocket hSocket)
```

#### Parameters

- **hSocket**: [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConfigureConnectionLanes(HSteamNetConnection, int, out int, out ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L535)

```csharp
public static EResult ConfigureConnectionLanes(HSteamNetConnection hConn, int nNumLanes, out int pLanePriorities, out ushort pLaneWeights)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **nNumLanes**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pLanePriorities**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pLaneWeights**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

- [EResult](/docs/api/shared/steamapi/eresult)

### ConnectByIPAddress(ref SteamNetworkingIPAddr, int, SteamNetworkingConfigValue_t[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L57)

```csharp
public static HSteamNetConnection ConnectByIPAddress(ref SteamNetworkingIPAddr address, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **address**: [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/shared/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

### ConnectP2P(ref SteamNetworkingIdentity, int, int, SteamNetworkingConfigValue_t[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L105)

```csharp
public static HSteamNetConnection ConnectP2P(ref SteamNetworkingIdentity identityRemote, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **identityRemote**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)
- **nRemoteVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/shared/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

### ConnectP2PCustomSignaling(out ISteamNetworkingConnectionSignaling, ref SteamNetworkingIdentity, int, int, SteamNetworkingConfigValue_t[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L868)

```csharp
public static HSteamNetConnection ConnectP2PCustomSignaling(out ISteamNetworkingConnectionSignaling pSignaling, ref SteamNetworkingIdentity pPeerIdentity, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **pSignaling**: [ISteamNetworkingConnectionSignaling](/docs/api/shared/steamapi/isteamnetworkingconnectionsignaling)
- **pPeerIdentity**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)
- **nRemoteVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/shared/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

### ConnectToHostedDedicatedServer(ref SteamNetworkingIdentity, int, int, SteamNetworkingConfigValue_t[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L711)

```csharp
public static HSteamNetConnection ConnectToHostedDedicatedServer(ref SteamNetworkingIdentity identityTarget, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **identityTarget**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)
- **nRemoteVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/shared/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

### CreateFakeUDPPort(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L1090)

```csharp
public static nint CreateFakeUDPPort(int idxFakeServerPort)
```

#### Parameters

- **idxFakeServerPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### CreateHostedDedicatedServerListenSocket(int, int, SteamNetworkingConfigValue_t[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L788)

```csharp
public static HSteamListenSocket CreateHostedDedicatedServerListenSocket(int nLocalVirtualPort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **nLocalVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/shared/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)

### CreateListenSocketIP(ref SteamNetworkingIPAddr, int, SteamNetworkingConfigValue_t[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L28)

```csharp
public static HSteamListenSocket CreateListenSocketIP(ref SteamNetworkingIPAddr localAddress, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **localAddress**: [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/shared/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)

### CreateListenSocketP2P(int, int, SteamNetworkingConfigValue_t[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L87)

```csharp
public static HSteamListenSocket CreateListenSocketP2P(int nLocalVirtualPort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **nLocalVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/shared/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)

### CreateListenSocketP2PFakeIP(int, int, SteamNetworkingConfigValue_t[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L1044)

```csharp
public static HSteamListenSocket CreateListenSocketP2PFakeIP(int idxFakePort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **idxFakePort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/shared/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)

### CreatePollGroup()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L605)

```csharp
public static HSteamNetPollGroup CreatePollGroup()
```

#### Returns

- [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)

### CreateSocketPair(out HSteamNetConnection, out HSteamNetConnection, bool, ref SteamNetworkingIdentity, ref SteamNetworkingIdentity)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L461)

```csharp
public static bool CreateSocketPair(out HSteamNetConnection pOutConnection1, out HSteamNetConnection pOutConnection2, bool bUseNetworkLoopback, ref SteamNetworkingIdentity pIdentity1, ref SteamNetworkingIdentity pIdentity2)
```

#### Parameters

- **pOutConnection1**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **pOutConnection2**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **bUseNetworkLoopback**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- **pIdentity1**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)
- **pIdentity2**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DestroyPollGroup(HSteamNetPollGroup)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L617)

```csharp
public static bool DestroyPollGroup(HSteamNetPollGroup hPollGroup)
```

#### Parameters

- **hPollGroup**: [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FindRelayAuthTicketForServer(ref SteamNetworkingIdentity, int, out SteamDatagramRelayAuthTicket)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L688)

```csharp
public static int FindRelayAuthTicketForServer(ref SteamNetworkingIdentity identityGameServer, int nRemoteVirtualPort, out SteamDatagramRelayAuthTicket pOutParsedTicket)
```

#### Parameters

- **identityGameServer**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)
- **nRemoteVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOutParsedTicket**: [SteamDatagramRelayAuthTicket](/docs/api/shared/steamapi/steamdatagramrelayauthticket)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FlushMessagesOnConnection(HSteamNetConnection)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L353)

```csharp
public static EResult FlushMessagesOnConnection(HSteamNetConnection hConn)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

#### Returns

- [EResult](/docs/api/shared/steamapi/eresult)

### GetAuthenticationStatus(out SteamNetAuthenticationStatus_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L592)

```csharp
public static ESteamNetworkingAvailability GetAuthenticationStatus(out SteamNetAuthenticationStatus_t pDetails)
```

#### Parameters

- **pDetails**: [SteamNetAuthenticationStatus_t](/docs/api/shared/steamapi/steamnetauthenticationstatus_t)

#### Returns

- [ESteamNetworkingAvailability](/docs/api/shared/steamapi/esteamnetworkingavailability)

### GetCertificateRequest(out int, nint, out SteamNetworkingErrMsg)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L919)

```csharp
public static bool GetCertificateRequest(out int pcbBlob, nint pBlob, out SteamNetworkingErrMsg errMsg)
```

#### Parameters

- **pcbBlob**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pBlob**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **errMsg**: [SteamNetworkingErrMsg](/docs/api/shared/steamapi/steamnetworkingerrmsg)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetConnectionInfo(HSteamNetConnection, out SteamNetConnectionInfo_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L383)

```csharp
public static bool GetConnectionInfo(HSteamNetConnection hConn, out SteamNetConnectionInfo_t pInfo)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **pInfo**: [SteamNetConnectionInfo_t](/docs/api/shared/steamapi/steamnetconnectioninfo_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetConnectionName(HSteamNetConnection, out string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L246)

```csharp
public static bool GetConnectionName(HSteamNetConnection hPeer, out string pszName, int nMaxLen)
```

#### Parameters

- **hPeer**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **pszName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **nMaxLen**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetConnectionRealTimeStatus(HSteamNetConnection, ref SteamNetConnectionRealTimeStatus_t, int, ref SteamNetConnectionRealTimeLaneStatus_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L404)

```csharp
public static EResult GetConnectionRealTimeStatus(HSteamNetConnection hConn, ref SteamNetConnectionRealTimeStatus_t pStatus, int nLanes, ref SteamNetConnectionRealTimeLaneStatus_t pLanes)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **pStatus**: [SteamNetConnectionRealTimeStatus_t](/docs/api/shared/steamapi/steamnetconnectionrealtimestatus_t)
- **nLanes**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pLanes**: [SteamNetConnectionRealTimeLaneStatus_t](/docs/api/shared/steamapi/steamnetconnectionrealtimelanestatus_t)

#### Returns

- [EResult](/docs/api/shared/steamapi/eresult)

### GetConnectionUserData(HSteamNetConnection)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L228)

```csharp
public static long GetConnectionUserData(HSteamNetConnection hPeer)
```

#### Parameters

- **hPeer**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

#### Returns

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetDetailedConnectionStatus(HSteamNetConnection, out string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L419)

```csharp
public static int GetDetailedConnectionStatus(HSteamNetConnection hConn, out string pszBuf, int cbBuf)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **pszBuf**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cbBuf**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetFakeIP(int, out SteamNetworkingFakeIPResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L1028)

```csharp
public static void GetFakeIP(int idxFirstPort, out SteamNetworkingFakeIPResult_t pInfo)
```

#### Parameters

- **idxFirstPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pInfo**: [SteamNetworkingFakeIPResult_t](/docs/api/shared/steamapi/steamnetworkingfakeipresult_t)

### GetGameCoordinatorServerLogin(nint, out int, nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L825)

```csharp
public static EResult GetGameCoordinatorServerLogin(nint pLoginInfo, out int pcbSignedBlob, nint pBlob)
```

#### Parameters

- **pLoginInfo**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **pcbSignedBlob**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pBlob**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [EResult](/docs/api/shared/steamapi/eresult)

### GetHostedDedicatedServerAddress(out SteamDatagramHostedAddress)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L768)

```csharp
public static EResult GetHostedDedicatedServerAddress(out SteamDatagramHostedAddress pRouting)
```

#### Parameters

- **pRouting**: [SteamDatagramHostedAddress](/docs/api/shared/steamapi/steamdatagramhostedaddress)

#### Returns

- [EResult](/docs/api/shared/steamapi/eresult)

### GetHostedDedicatedServerPOPID()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L735)

```csharp
public static SteamNetworkingPOPID GetHostedDedicatedServerPOPID()
```

#### Returns

- [SteamNetworkingPOPID](/docs/api/shared/steamapi/steamnetworkingpopid)

### GetHostedDedicatedServerPort()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L726)

```csharp
public static ushort GetHostedDedicatedServerPort()
```

#### Returns

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### GetIdentity(out SteamNetworkingIdentity)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L548)

```csharp
public static bool GetIdentity(out SteamNetworkingIdentity pIdentity)
```

#### Parameters

- **pIdentity**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetListenSocketAddress(HSteamListenSocket, out SteamNetworkingIPAddr)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L434)

```csharp
public static bool GetListenSocketAddress(HSteamListenSocket hSocket, out SteamNetworkingIPAddr address)
```

#### Parameters

- **hSocket**: [HSteamListenSocket](/docs/api/shared/steamapi/hsteamlistensocket)
- **address**: [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetRemoteFakeIPForConnection(HSteamNetConnection, out SteamNetworkingIPAddr)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L1066)

```csharp
public static EResult GetRemoteFakeIPForConnection(HSteamNetConnection hConn, out SteamNetworkingIPAddr pOutAddr)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **pOutAddr**: [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)

#### Returns

- [EResult](/docs/api/shared/steamapi/eresult)

### InitAuthentication()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L578)

```csharp
public static ESteamNetworkingAvailability InitAuthentication()
```

#### Returns

- [ESteamNetworkingAvailability](/docs/api/shared/steamapi/esteamnetworkingavailability)

### ReceiveMessagesOnConnection(HSteamNetConnection, nint[], int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L375)

```csharp
public static int ReceiveMessagesOnConnection(HSteamNetConnection hConn, nint[] ppOutMessages, int nMaxMessages)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **ppOutMessages**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)[]
- **nMaxMessages**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ReceiveMessagesOnPollGroup(HSteamNetPollGroup, nint[], int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L660)

```csharp
public static int ReceiveMessagesOnPollGroup(HSteamNetPollGroup hPollGroup, nint[] ppOutMessages, int nMaxMessages)
```

#### Parameters

- **hPollGroup**: [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)
- **ppOutMessages**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)[]
- **nMaxMessages**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ReceivedP2PCustomSignal(nint, int, out ISteamNetworkingSignalingRecvContext)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L904)

```csharp
public static bool ReceivedP2PCustomSignal(nint pMsg, int cbMsg, out ISteamNetworkingSignalingRecvContext pContext)
```

#### Parameters

- **pMsg**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbMsg**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pContext**: [ISteamNetworkingSignalingRecvContext](/docs/api/shared/steamapi/isteamnetworkingsignalingrecvcontext)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReceivedRelayAuthTicket(nint, int, out SteamDatagramRelayAuthTicket)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L675)

```csharp
public static bool ReceivedRelayAuthTicket(nint pvTicket, int cbTicket, out SteamDatagramRelayAuthTicket pOutParsedTicket)
```

#### Parameters

- **pvTicket**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbTicket**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOutParsedTicket**: [SteamDatagramRelayAuthTicket](/docs/api/shared/steamapi/steamdatagramrelayauthticket)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetIdentity(ref SteamNetworkingIdentity)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L943)

```csharp
public static void ResetIdentity(ref SteamNetworkingIdentity pIdentity)
```

#### Parameters

- **pIdentity**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)

### RunCallbacks()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L956)

```csharp
public static void RunCallbacks()
```

### SendMessageToConnection(HSteamNetConnection, nint, uint, int, out long)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L294)

```csharp
public static EResult SendMessageToConnection(HSteamNetConnection hConn, nint pData, uint cbData, int nSendFlags, out long pOutMessageNumber)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **pData**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbData**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **nSendFlags**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOutMessageNumber**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

- [EResult](/docs/api/shared/steamapi/eresult)

### SendMessages(int, SteamNetworkingMessage_t[], long[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L333)

```csharp
public static void SendMessages(int nMessages, SteamNetworkingMessage_t[] pMessages, long[] pOutMessageNumberOrResult)
```

#### Parameters

- **nMessages**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pMessages**: [SteamNetworkingMessage_t](/docs/api/shared/steamapi/steamnetworkingmessage_t)[]
- **pOutMessageNumberOrResult**: [long](https://learn.microsoft.com/dotnet/api/system.int64)[]

### SetCertificate(nint, int, out SteamNetworkingErrMsg)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L928)

```csharp
public static bool SetCertificate(nint pCertificate, int cbCertificate, out SteamNetworkingErrMsg errMsg)
```

#### Parameters

- **pCertificate**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbCertificate**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **errMsg**: [SteamNetworkingErrMsg](/docs/api/shared/steamapi/steamnetworkingerrmsg)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetConnectionName(HSteamNetConnection, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L236)

```csharp
public static void SetConnectionName(HSteamNetConnection hPeer, string pszName)
```

#### Parameters

- **hPeer**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **pszName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetConnectionPollGroup(HSteamNetConnection, HSteamNetPollGroup)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L638)

```csharp
public static bool SetConnectionPollGroup(HSteamNetConnection hConn, HSteamNetPollGroup hPollGroup)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **hPollGroup**: [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetConnectionUserData(HSteamNetConnection, long)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L219)

```csharp
public static bool SetConnectionUserData(HSteamNetConnection hPeer, long nUserData)
```

#### Parameters

- **hPeer**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **nUserData**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

