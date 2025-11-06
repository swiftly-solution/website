---
title: SteamGameServerNetworking
---

```csharp
public static class SteamGameServerNetworking
```

#### Inheritance

#### Inherited Members

## Methods

### AcceptP2PSessionWithUser(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L56)

```csharp
public static bool AcceptP2PSessionWithUser(CSteamID steamIDRemote)
```

#### Parameters

- **steamIDRemote**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AllowP2PPacketRelay(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L99)

```csharp
public static bool AllowP2PPacketRelay(bool bAllow)
```

#### Parameters

- **bAllow**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseP2PChannelWithUser(CSteamID, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L75)

```csharp
public static bool CloseP2PChannelWithUser(CSteamID steamIDRemote, int nChannel)
```

#### Parameters

- **steamIDRemote**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **nChannel**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseP2PSessionWithUser(CSteamID)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L65)

```csharp
public static bool CloseP2PSessionWithUser(CSteamID steamIDRemote)
```

#### Parameters

- **steamIDRemote**: [CSteamID](/docs/api/shared/steamapi/csteamid)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreateConnectionSocket(SteamIPAddress_t, ushort, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L142)

```csharp
public static SNetSocket_t CreateConnectionSocket(SteamIPAddress_t nIP, ushort nPort, int nTimeoutSec)
```

#### Parameters

- **nIP**: [SteamIPAddress_t](/docs/api/shared/steamapi/steamipaddress_t)
- **nPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)
- **nTimeoutSec**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)

### CreateListenSocket(int, SteamIPAddress_t, ushort, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L126)

```csharp
public static SNetListenSocket_t CreateListenSocket(int nVirtualP2PPort, SteamIPAddress_t nIP, ushort nPort, bool bAllowUseOfPacketRelay)
```

#### Parameters

- **nVirtualP2PPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nIP**: [SteamIPAddress_t](/docs/api/shared/steamapi/steamipaddress_t)
- **nPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)
- **bAllowUseOfPacketRelay**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [SNetListenSocket_t](/docs/api/shared/steamapi/snetlistensocket_t)

### CreateP2PConnectionSocket(CSteamID, int, int, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L137)

```csharp
public static SNetSocket_t CreateP2PConnectionSocket(CSteamID steamIDTarget, int nVirtualPort, int nTimeoutSec, bool bAllowUseOfPacketRelay)
```

#### Parameters

- **steamIDTarget**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **nVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nTimeoutSec**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **bAllowUseOfPacketRelay**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)

### DestroyListenSocket(SNetListenSocket_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L160)

```csharp
public static bool DestroyListenSocket(SNetListenSocket_t hSocket, bool bNotifyRemoteEnd)
```

#### Parameters

- **hSocket**: [SNetListenSocket_t](/docs/api/shared/steamapi/snetlistensocket_t)
- **bNotifyRemoteEnd**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DestroySocket(SNetSocket_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L152)

```csharp
public static bool DestroySocket(SNetSocket_t hSocket, bool bNotifyRemoteEnd)
```

#### Parameters

- **hSocket**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)
- **bNotifyRemoteEnd**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetListenSocketInfo(SNetListenSocket_t, out SteamIPAddress_t, out ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L234)

```csharp
public static bool GetListenSocketInfo(SNetListenSocket_t hListenSocket, out SteamIPAddress_t pnIP, out ushort pnPort)
```

#### Parameters

- **hListenSocket**: [SNetListenSocket_t](/docs/api/shared/steamapi/snetlistensocket_t)
- **pnIP**: [SteamIPAddress_t](/docs/api/shared/steamapi/steamipaddress_t)
- **pnPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetMaxPacketSize(SNetSocket_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L250)

```csharp
public static int GetMaxPacketSize(SNetSocket_t hSocket)
```

#### Parameters

- **hSocket**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetP2PSessionState(CSteamID, out P2PSessionState_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L85)

```csharp
public static bool GetP2PSessionState(CSteamID steamIDRemote, out P2PSessionState_t pConnectionState)
```

#### Parameters

- **steamIDRemote**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pConnectionState**: [P2PSessionState_t](/docs/api/shared/steamapi/p2psessionstate_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetSocketConnectionType(SNetSocket_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L242)

```csharp
public static ESNetSocketConnectionType GetSocketConnectionType(SNetSocket_t hSocket)
```

#### Parameters

- **hSocket**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)

#### Returns

- [ESNetSocketConnectionType](/docs/api/shared/steamapi/esnetsocketconnectiontype)

### GetSocketInfo(SNetSocket_t, out CSteamID, out int, out SteamIPAddress_t, out ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L225)

```csharp
public static bool GetSocketInfo(SNetSocket_t hSocket, out CSteamID pSteamIDRemote, out int peSocketStatus, out SteamIPAddress_t punIPRemote, out ushort punPortRemote)
```

#### Parameters

- **hSocket**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)
- **pSteamIDRemote**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **peSocketStatus**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **punIPRemote**: [SteamIPAddress_t](/docs/api/shared/steamapi/steamipaddress_t)
- **punPortRemote**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsDataAvailable(SNetListenSocket_t, out uint, out SNetSocket_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L204)

```csharp
public static bool IsDataAvailable(SNetListenSocket_t hListenSocket, out uint pcubMsgSize, out SNetSocket_t phSocket)
```

#### Parameters

- **hListenSocket**: [SNetListenSocket_t](/docs/api/shared/steamapi/snetlistensocket_t)
- **pcubMsgSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **phSocket**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsDataAvailableOnSocket(SNetSocket_t, out uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L182)

```csharp
public static bool IsDataAvailableOnSocket(SNetSocket_t hSocket, out uint pcubMsgSize)
```

#### Parameters

- **hSocket**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)
- **pcubMsgSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsP2PPacketAvailable(out uint, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L32)

```csharp
public static bool IsP2PPacketAvailable(out uint pcubMsgSize, int nChannel = 0)
```

#### Parameters

- **pcubMsgSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **nChannel**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReadP2PPacket(byte[], uint, out uint, out CSteamID, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L43)

```csharp
public static bool ReadP2PPacket(byte[] pubDest, uint cubDest, out uint pcubMsgSize, out CSteamID psteamIDRemote, int nChannel = 0)
```

#### Parameters

- **pubDest**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubDest**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pcubMsgSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **psteamIDRemote**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **nChannel**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RetrieveData(SNetListenSocket_t, byte[], uint, out uint, out SNetSocket_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L217)

```csharp
public static bool RetrieveData(SNetListenSocket_t hListenSocket, byte[] pubDest, uint cubDest, out uint pcubMsgSize, out SNetSocket_t phSocket)
```

#### Parameters

- **hListenSocket**: [SNetListenSocket_t](/docs/api/shared/steamapi/snetlistensocket_t)
- **pubDest**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubDest**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pcubMsgSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **phSocket**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RetrieveDataFromSocket(SNetSocket_t, byte[], uint, out uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L193)

```csharp
public static bool RetrieveDataFromSocket(SNetSocket_t hSocket, byte[] pubDest, uint cubDest, out uint pcubMsgSize)
```

#### Parameters

- **hSocket**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)
- **pubDest**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubDest**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pcubMsgSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SendDataOnSocket(SNetSocket_t, byte[], uint, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L172)

```csharp
public static bool SendDataOnSocket(SNetSocket_t hSocket, byte[] pubData, uint cubData, bool bReliable)
```

#### Parameters

- **hSocket**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)
- **pubData**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubData**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **bReliable**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SendP2PPacket(CSteamID, byte[], uint, EP2PSend, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworking.cs#L24)

```csharp
public static bool SendP2PPacket(CSteamID steamIDRemote, byte[] pubData, uint cubData, EP2PSend eP2PSendType, int nChannel = 0)
```

#### Parameters

- **steamIDRemote**: [CSteamID](/docs/api/shared/steamapi/csteamid)
- **pubData**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **cubData**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **eP2PSendType**: [EP2PSend](/docs/api/shared/steamapi/ep2psend)
- **nChannel**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

