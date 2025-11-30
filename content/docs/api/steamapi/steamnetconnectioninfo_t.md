---
title: SteamNetConnectionInfo_t
---

# Struct SteamNetConnectionInfo_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L260)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct SteamNetConnectionInfo_t
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### m__pad1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L275)

```csharp
public ushort m__pad1
```

#### Field Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### m_addrRemote

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L274)

```csharp
public SteamNetworkingIPAddr m_addrRemote
```

#### Field Value

- [SteamNetworkingIPAddr](/docs/api/steamapi/steamnetworkingipaddr)

### m_eEndReason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L289)

```csharp
public int m_eEndReason
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_eState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L285)

```csharp
public ESteamNetworkingConnectionState m_eState
```

#### Field Value

- [ESteamNetworkingConnectionState](/docs/api/steamapi/esteamnetworkingconnectionstate)

### m_hListenSocket

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L270)

```csharp
public HSteamListenSocket m_hListenSocket
```

#### Field Value

- [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

### m_idPOPRelay

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L282)

```csharp
public SteamNetworkingPOPID m_idPOPRelay
```

#### Field Value

- [SteamNetworkingPOPID](/docs/api/steamapi/steamnetworkingpopid)

### m_idPOPRemote

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L278)

```csharp
public SteamNetworkingPOPID m_idPOPRemote
```

#### Field Value

- [SteamNetworkingPOPID](/docs/api/steamapi/steamnetworkingpopid)

### m_identityRemote

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L264)

```csharp
public SteamNetworkingIdentity m_identityRemote
```

#### Field Value

- [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)

### m_nFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L319)

```csharp
public int m_nFlags
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nUserData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L267)

```csharp
public long m_nUserData
```

#### Field Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### reserved

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L323)

```csharp
public uint[] reserved
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)[]

## Properties

### m_szConnectionDescription

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L312)

```csharp
public string m_szConnectionDescription { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### m_szEndDebug

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/SteamStructs.cs#L297)

```csharp
public string m_szEndDebug { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

