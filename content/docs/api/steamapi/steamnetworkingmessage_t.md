---
title: SteamNetworkingMessage_t
---

# Struct SteamNetworkingMessage_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L7)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct SteamNetworkingMessage_t
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### _pad1__

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L88)

```csharp
public ushort _pad1__
```

#### Field Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### m_cbSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L15)

```csharp
public int m_cbSize
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_conn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L20)

```csharp
public HSteamNetConnection m_conn
```

#### Field Value

- [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)

### m_identityPeer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L25)

```csharp
public SteamNetworkingIdentity m_identityPeer
```

#### Field Value

- [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)

### m_idxLane

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L86)

```csharp
public ushort m_idxLane
```

#### Field Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### m_nChannel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L70)

```csharp
public int m_nChannel
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nConnUserData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L43)

```csharp
public long m_nConnUserData
```

#### Field Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### m_nFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L75)

```csharp
public int m_nFlags
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nMessageNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L53)

```csharp
public long m_nMessageNumber
```

#### Field Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### m_nUserData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L82)

```csharp
public long m_nUserData
```

#### Field Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### m_pData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L12)

```csharp
public nint m_pData
```

#### Field Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### m_pfnFreeData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L61)

```csharp
public nint m_pfnFreeData
```

#### Field Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### m_usecTimeReceived

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L47)

```csharp
public SteamNetworkingMicroseconds m_usecTimeReceived
```

#### Field Value

- [SteamNetworkingMicroseconds](/docs/api/steamapi/steamnetworkingmicroseconds)

## Methods

### FromIntPtr(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L107)

```csharp
public static SteamNetworkingMessage_t FromIntPtr(nint pointer)
```

#### Parameters

- **pointer**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [SteamNetworkingMessage_t](/docs/api/steamapi/steamnetworkingmessage_t)

### Release()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L92)

```csharp
public void Release()
```

### Release(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L100)

```csharp
public static void Release(nint pointer)
```

#### Parameters

- **pointer**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

