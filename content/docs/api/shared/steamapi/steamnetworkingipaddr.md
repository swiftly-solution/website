---
title: SteamNetworkingIPAddr
---

```csharp
[Serializable]
public struct SteamNetworkingIPAddr : IEquatable<SteamNetworkingIPAddr>
```

#### Implements

#### Inherited Members

## Fields

### k_cchMaxString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L19)

```csharp
public const int k_cchMaxString = 48
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_ipv6

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L14)

```csharp
public byte[] m_ipv6
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### m_port

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L15)

```csharp
public ushort m_port
```

#### Field Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Methods

### Clear()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L22)

```csharp
public void Clear()
```

### Equals(SteamNetworkingIPAddr)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L95)

```csharp
public bool Equals(SteamNetworkingIPAddr x)
```

#### Parameters

- **x**: [SteamNetworkingIPAddr](/docs/api/shared/steamapi/steamnetworkingipaddr)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetFakeIPType()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L102)

```csharp
public ESteamNetworkingFakeIPType GetFakeIPType()
```

#### Returns

- [ESteamNetworkingFakeIPType](/docs/api/shared/steamapi/esteamnetworkingfakeiptype)

### GetIPv4()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L52)

```csharp
public uint GetIPv4()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### IsFakeIP()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L108)

```csharp
public bool IsFakeIP()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsIPv4()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L46)

```csharp
public bool IsIPv4()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsIPv6AllZeros()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L28)

```csharp
public bool IsIPv6AllZeros()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLocalHost()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L64)

```csharp
public bool IsLocalHost()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParseString(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L86)

```csharp
public bool ParseString(string pszStr)
```

#### Parameters

- **pszStr**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetIPv4(uint, ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L40)

```csharp
public void SetIPv4(uint nIP, ushort nPort)
```

#### Parameters

- **nIP**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **nPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SetIPv6(byte[], ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L34)

```csharp
public void SetIPv6(byte[] ipv6, ushort nPort)
```

#### Parameters

- **ipv6**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **nPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SetIPv6LocalHost(ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L58)

```csharp
public void SetIPv6LocalHost(ushort nPort = 0)
```

#### Parameters

- **nPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ToString(out string, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L76)

```csharp
public void ToString(out string buf, bool bWithPort)
```

#### Parameters

- **buf**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **bWithPort**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

