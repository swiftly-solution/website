---
title: SNetSocket_t
---

```csharp
[Serializable]
public struct SNetSocket_t : IEquatable<SNetSocket_t>, IComparable<SNetSocket_t>
```

#### Implements

#### Inherited Members

## Constructors

### SNetSocket_t(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L9)

```csharp
public SNetSocket_t(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### m_SNetSocket

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L7)

```csharp
public uint m_SNetSocket
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### CompareTo(SNetSocket_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L45)

```csharp
public int CompareTo(SNetSocket_t other)
```

#### Parameters

- **other**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:  

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L17)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(SNetSocket_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L41)

```csharp
public bool Equals(SNetSocket_t other)
```

#### Parameters

- **other**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L21)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L13)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(SNetSocket_t, SNetSocket_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L25)

```csharp
public static bool operator ==(SNetSocket_t x, SNetSocket_t y)
```

#### Parameters

- **x**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)
- **y**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator SNetSocket_t(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L33)

```csharp
public static explicit operator SNetSocket_t(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)

### explicit operator uint(SNetSocket_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L37)

```csharp
public static explicit operator uint(SNetSocket_t that)
```

#### Parameters

- **that**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### operator !=(SNetSocket_t, SNetSocket_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworking/SNetSocket_t.cs#L29)

```csharp
public static bool operator !=(SNetSocket_t x, SNetSocket_t y)
```

#### Parameters

- **x**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)
- **y**: [SNetSocket_t](/docs/api/shared/steamapi/snetsocket_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

