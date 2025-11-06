---
title: servernetadr_t
---

```csharp
[Serializable]
public struct servernetadr_t
```

#### Inherited Members

## Methods

### CompareTo(servernetadr_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L116)

```csharp
public int CompareTo(servernetadr_t other)
```

#### Parameters

- **other**: [servernetadr_t](/docs/api/shared/steamapi/servernetadr_t)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L91)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(servernetadr_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L111)

```csharp
public bool Equals(servernetadr_t other)
```

#### Parameters

- **other**: [servernetadr_t](/docs/api/shared/steamapi/servernetadr_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetConnectionAddressString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L62)

```csharp
public string GetConnectionAddressString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetConnectionPort()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L40)

```csharp
public ushort GetConnectionPort()
```

#### Returns

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L96)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### GetIP()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L51)

```csharp
public uint GetIP()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetQueryAddressString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L67)

```csharp
public string GetQueryAddressString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetQueryPort()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L29)

```csharp
public ushort GetQueryPort()
```

#### Returns

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Init(uint, ushort, ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L15)

```csharp
public void Init(uint ip, ushort usQueryPort, ushort usConnectionPort)
```

#### Parameters

- **ip**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **usQueryPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)
- **usConnectionPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SetConnectionPort(ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L45)

```csharp
public void SetConnectionPort(ushort usPort)
```

#### Parameters

- **usPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SetIP(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L56)

```csharp
public void SetIP(uint unIP)
```

#### Parameters

- **unIP**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SetQueryPort(ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L34)

```csharp
public void SetQueryPort(ushort usPort)
```

#### Parameters

- **usPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ToString(uint, ushort)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L72)

```csharp
public static string ToString(uint unIP, ushort usPort)
```

#### Parameters

- **unIP**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **usPort**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### operator ==(servernetadr_t, servernetadr_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L101)

```csharp
public static bool operator ==(servernetadr_t x, servernetadr_t y)
```

#### Parameters

- **x**: [servernetadr_t](/docs/api/shared/steamapi/servernetadr_t)
- **y**: [servernetadr_t](/docs/api/shared/steamapi/servernetadr_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator >(servernetadr_t, servernetadr_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L86)

```csharp
public static bool operator >(servernetadr_t x, servernetadr_t y)
```

#### Parameters

- **x**: [servernetadr_t](/docs/api/shared/steamapi/servernetadr_t)
- **y**: [servernetadr_t](/docs/api/shared/steamapi/servernetadr_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator !=(servernetadr_t, servernetadr_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L106)

```csharp
public static bool operator !=(servernetadr_t x, servernetadr_t y)
```

#### Parameters

- **x**: [servernetadr_t](/docs/api/shared/steamapi/servernetadr_t)
- **y**: [servernetadr_t](/docs/api/shared/steamapi/servernetadr_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator <(servernetadr_t, servernetadr_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/MatchmakingTypes/servernetadr_t.cs#L81)

```csharp
public static bool operator <(servernetadr_t x, servernetadr_t y)
```

#### Parameters

- **x**: [servernetadr_t](/docs/api/shared/steamapi/servernetadr_t)
- **y**: [servernetadr_t](/docs/api/shared/steamapi/servernetadr_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

