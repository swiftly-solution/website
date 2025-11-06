---
title: SteamNetworkingMicroseconds
---

```csharp
[Serializable]
public struct SteamNetworkingMicroseconds : IEquatable<SteamNetworkingMicroseconds>, IComparable<SteamNetworkingMicroseconds>
```

#### Implements

#### Inherited Members

## Constructors

### SteamNetworkingMicroseconds(long)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L9)

```csharp
public SteamNetworkingMicroseconds(long value)
```

#### Parameters

- **value**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

## Fields

### m_SteamNetworkingMicroseconds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L7)

```csharp
public long m_SteamNetworkingMicroseconds
```

#### Field Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

## Methods

### CompareTo(SteamNetworkingMicroseconds)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L45)

```csharp
public int CompareTo(SteamNetworkingMicroseconds other)
```

#### Parameters

- **other**: [SteamNetworkingMicroseconds](/docs/api/shared/steamapi/steamnetworkingmicroseconds) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:  

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L17)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(SteamNetworkingMicroseconds)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L41)

```csharp
public bool Equals(SteamNetworkingMicroseconds other)
```

#### Parameters

- **other**: [SteamNetworkingMicroseconds](/docs/api/shared/steamapi/steamnetworkingmicroseconds) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L21)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L13)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(SteamNetworkingMicroseconds, SteamNetworkingMicroseconds)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L25)

```csharp
public static bool operator ==(SteamNetworkingMicroseconds x, SteamNetworkingMicroseconds y)
```

#### Parameters

- **x**: [SteamNetworkingMicroseconds](/docs/api/shared/steamapi/steamnetworkingmicroseconds)
- **y**: [SteamNetworkingMicroseconds](/docs/api/shared/steamapi/steamnetworkingmicroseconds)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator SteamNetworkingMicroseconds(long)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L33)

```csharp
public static explicit operator SteamNetworkingMicroseconds(long value)
```

#### Parameters

- **value**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

- [SteamNetworkingMicroseconds](/docs/api/shared/steamapi/steamnetworkingmicroseconds)

### explicit operator long(SteamNetworkingMicroseconds)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L37)

```csharp
public static explicit operator long(SteamNetworkingMicroseconds that)
```

#### Parameters

- **that**: [SteamNetworkingMicroseconds](/docs/api/shared/steamapi/steamnetworkingmicroseconds)

#### Returns

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### operator !=(SteamNetworkingMicroseconds, SteamNetworkingMicroseconds)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/SteamNetworkingMicroseconds.cs#L29)

```csharp
public static bool operator !=(SteamNetworkingMicroseconds x, SteamNetworkingMicroseconds y)
```

#### Parameters

- **x**: [SteamNetworkingMicroseconds](/docs/api/shared/steamapi/steamnetworkingmicroseconds)
- **y**: [SteamNetworkingMicroseconds](/docs/api/shared/steamapi/steamnetworkingmicroseconds)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

