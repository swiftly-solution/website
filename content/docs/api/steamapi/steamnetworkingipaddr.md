---
title: SteamNetworkingIPAddr
---

# Struct SteamNetworkingIPAddr

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L9)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
[Serializable]
public struct SteamNetworkingIPAddr : IEquatable<SteamNetworkingIPAddr>
```

#### Implements

- [IEquatable<SteamNetworkingIPAddr>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### k_cchMaxString

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L19)

```csharp
public const int k_cchMaxString = 48
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m_ipv6

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L14)

```csharp
public byte[] m_ipv6
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### m_port

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L15)

```csharp
public ushort m_port
```

#### Field Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Methods

### Clear()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L22)

```csharp
public void Clear()
```

### Equals(SteamNetworkingIPAddr)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L95)

```csharp
public bool Equals(SteamNetworkingIPAddr x)
```

#### Parameters

- **x**: [SteamNetworkingIPAddr](/docs/api/steamapi/steamnetworkingipaddr)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetFakeIPType()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L102)

```csharp
public ESteamNetworkingFakeIPType GetFakeIPType()
```

#### Returns

- [ESteamNetworkingFakeIPType](/docs/api/steamapi/esteamnetworkingfakeiptype)

### GetIPv4()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L52)

```csharp
public uint GetIPv4()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### IsFakeIP()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L108)

```csharp
public bool IsFakeIP()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsIPv4()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L46)

```csharp
public bool IsIPv4()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsIPv6AllZeros()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L28)

```csharp
public bool IsIPv6AllZeros()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLocalHost()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L64)

```csharp
public bool IsLocalHost()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParseString(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L86)

```csharp
public bool ParseString(string pszStr)
```

#### Parameters

- **pszStr**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetIPv4(uint, ushort)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L40)

```csharp
public void SetIPv4(uint nIP, ushort nPort)
```

#### Parameters

- **nIP**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **nPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SetIPv6(byte[], ushort)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L34)

```csharp
public void SetIPv6(byte[] ipv6, ushort nPort)
```

#### Parameters

- **ipv6**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **nPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SetIPv6LocalHost(ushort)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L58)

```csharp
public void SetIPv6LocalHost(ushort nPort = 0)
```

#### Parameters

- **nPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ToString(out string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingIPAddr.cs#L76)

```csharp
public void ToString(out string buf, bool bWithPort)
```

#### Parameters

- **buf**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **bWithPort**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

