---
title: ISteamNetworkingConnectionSignaling
---

# Struct ISteamNetworkingConnectionSignaling

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingSockets/ISteamNetworkingConnectionSignaling.cs#L12)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct ISteamNetworkingConnectionSignaling
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### Release()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingSockets/ISteamNetworkingConnectionSignaling.cs#L47)

```csharp
public void Release()
```

### SendSignal(HSteamNetConnection, ref SteamNetConnectionInfo_t, nint, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingSockets/ISteamNetworkingConnectionSignaling.cs#L32)

```csharp
public bool SendSignal(HSteamNetConnection hConn, ref SteamNetConnectionInfo_t info, nint pMsg, int cbMsg)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **info**: [SteamNetConnectionInfo_t](/docs/api/steamapi/steamnetconnectioninfo_t)
- **pMsg**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbMsg**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

