---
title: ISteamNetworkingSignalingRecvContext
---

```csharp
[Serializable]
public struct ISteamNetworkingSignalingRecvContext
```

#### Inherited Members

## Methods

### OnConnectRequest(HSteamNetConnection, ref SteamNetworkingIdentity, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingSockets/ISteamNetworkingSignalingRecvContext.cs#L38)

```csharp
public nint OnConnectRequest(HSteamNetConnection hConn, ref SteamNetworkingIdentity identityPeer, int nLocalVirtualPort)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **identityPeer**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)
- **nLocalVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### SendRejectionSignal(ref SteamNetworkingIdentity, nint, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingSockets/ISteamNetworkingSignalingRecvContext.cs#L47)

```csharp
public void SendRejectionSignal(ref SteamNetworkingIdentity identityPeer, nint pMsg, int cbMsg)
```

#### Parameters

- **identityPeer**: [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)
- **pMsg**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbMsg**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

