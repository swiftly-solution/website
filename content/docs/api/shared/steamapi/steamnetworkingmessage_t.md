---
title: SteamNetworkingMessage_t
---

```csharp
[Serializable]
public struct SteamNetworkingMessage_t
```

#### Inherited Members

## Fields

### _pad1__

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L88)

```csharp
public ushort _pad1__
```

#### Field Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### m_cbSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L15)

```csharp
public int m_cbSize
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_conn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L20)

```csharp
public HSteamNetConnection m_conn
```

#### Field Value

- [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

### m_identityPeer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L25)

```csharp
public SteamNetworkingIdentity m_identityPeer
```

#### Field Value

- [SteamNetworkingIdentity](/docs/api/shared/steamapi/steamnetworkingidentity)

### m_idxLane

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L86)

```csharp
public ushort m_idxLane
```

#### Field Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### m_nChannel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L70)

```csharp
public int m_nChannel
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nConnUserData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L43)

```csharp
public long m_nConnUserData
```

#### Field Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### m_nFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L75)

```csharp
public int m_nFlags
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_nMessageNumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L53)

```csharp
public long m_nMessageNumber
```

#### Field Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### m_nUserData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L82)

```csharp
public long m_nUserData
```

#### Field Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### m_pData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L12)

```csharp
public nint m_pData
```

#### Field Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### m_pfnFreeData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L61)

```csharp
public nint m_pfnFreeData
```

#### Field Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### m_usecTimeReceived

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L47)

```csharp
public SteamNetworkingMicroseconds m_usecTimeReceived
```

#### Field Value

- [SteamNetworkingMicroseconds](/docs/api/shared/steamapi/steamnetworkingmicroseconds)

## Methods

### FromIntPtr(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L107)

```csharp
public static SteamNetworkingMessage_t FromIntPtr(nint pointer)
```

#### Parameters

- **pointer**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [SteamNetworkingMessage_t](/docs/api/shared/steamapi/steamnetworkingmessage_t)

### Release()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L92)

```csharp
public void Release()
```

### Release(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMessage_t.cs#L100)

```csharp
public static void Release(nint pointer)
```

#### Parameters

- **pointer**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

