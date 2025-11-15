---
title: HSteamNetPollGroup
---

```csharp
[Serializable]
public struct HSteamNetPollGroup : IEquatable<HSteamNetPollGroup>, IComparable<HSteamNetPollGroup>
```

#### Implements

#### Inherited Members

## Constructors

### HSteamNetPollGroup(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L10)

```csharp
public HSteamNetPollGroup(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L7)

```csharp
public static readonly HSteamNetPollGroup Invalid
```

#### Field Value

- [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)

### m_HSteamNetPollGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L8)

```csharp
public uint m_HSteamNetPollGroup
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### CompareTo(HSteamNetPollGroup)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L46)

```csharp
public int CompareTo(HSteamNetPollGroup other)
```

#### Parameters

- **other**: [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(HSteamNetPollGroup)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L42)

```csharp
public bool Equals(HSteamNetPollGroup other)
```

#### Parameters

- **other**: [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(HSteamNetPollGroup, HSteamNetPollGroup)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L26)

```csharp
public static bool operator ==(HSteamNetPollGroup x, HSteamNetPollGroup y)
```

#### Parameters

- **x**: [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)
- **y**: [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator HSteamNetPollGroup(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L34)

```csharp
public static explicit operator HSteamNetPollGroup(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)

### explicit operator uint(HSteamNetPollGroup)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L38)

```csharp
public static explicit operator uint(HSteamNetPollGroup that)
```

#### Parameters

- **that**: [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### operator !=(HSteamNetPollGroup, HSteamNetPollGroup)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetPollGroup.cs#L30)

```csharp
public static bool operator !=(HSteamNetPollGroup x, HSteamNetPollGroup y)
```

#### Parameters

- **x**: [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)
- **y**: [HSteamNetPollGroup](/docs/api/shared/steamapi/hsteamnetpollgroup)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

