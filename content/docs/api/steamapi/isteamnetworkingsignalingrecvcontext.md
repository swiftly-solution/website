---
title: ISteamNetworkingSignalingRecvContext
---

# Struct ISteamNetworkingSignalingRecvContext

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingSockets/ISteamNetworkingSignalingRecvContext.cs#L8)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct ISteamNetworkingSignalingRecvContext
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### OnConnectRequest(HSteamNetConnection, ref SteamNetworkingIdentity, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingSockets/ISteamNetworkingSignalingRecvContext.cs#L38)

```csharp
public nint OnConnectRequest(HSteamNetConnection hConn, ref SteamNetworkingIdentity identityPeer, int nLocalVirtualPort)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **identityPeer**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)
- **nLocalVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### SendRejectionSignal(ref SteamNetworkingIdentity, nint, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingSockets/ISteamNetworkingSignalingRecvContext.cs#L47)

```csharp
public void SendRejectionSignal(ref SteamNetworkingIdentity identityPeer, nint pMsg, int cbMsg)
```

#### Parameters

- **identityPeer**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)
- **pMsg**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbMsg**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

