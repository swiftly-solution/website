---
title: ISteamNetworkingConnectionSignaling
---

```csharp
[Serializable]
public struct ISteamNetworkingConnectionSignaling
```

#### Inherited Members

## Methods

### Release()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingSockets/ISteamNetworkingConnectionSignaling.cs#L47)

```csharp
public void Release()
```

### SendSignal(HSteamNetConnection, ref SteamNetConnectionInfo_t, nint, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingSockets/ISteamNetworkingConnectionSignaling.cs#L32)

```csharp
public bool SendSignal(HSteamNetConnection hConn, ref SteamNetConnectionInfo_t info, nint pMsg, int cbMsg)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **info**: [SteamNetConnectionInfo_t](/docs/api/shared/steamapi/steamnetconnectioninfo_t)
- **pMsg**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbMsg**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

