---
title: HSteamNetConnection
---

```csharp
[Serializable]
public struct HSteamNetConnection : IEquatable<HSteamNetConnection>, IComparable<HSteamNetConnection>
```

#### Implements

#### Inherited Members

## Constructors

### HSteamNetConnection(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L10)

```csharp
public HSteamNetConnection(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L7)

```csharp
public static readonly HSteamNetConnection Invalid
```

#### Field Value

- [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

### m_HSteamNetConnection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L8)

```csharp
public uint m_HSteamNetConnection
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### CompareTo(HSteamNetConnection)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L46)

```csharp
public int CompareTo(HSteamNetConnection other)
```

#### Parameters

- **other**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(HSteamNetConnection)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L42)

```csharp
public bool Equals(HSteamNetConnection other)
```

#### Parameters

- **other**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(HSteamNetConnection, HSteamNetConnection)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L26)

```csharp
public static bool operator ==(HSteamNetConnection x, HSteamNetConnection y)
```

#### Parameters

- **x**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **y**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator HSteamNetConnection(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L34)

```csharp
public static explicit operator HSteamNetConnection(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

### explicit operator uint(HSteamNetConnection)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L38)

```csharp
public static explicit operator uint(HSteamNetConnection that)
```

#### Parameters

- **that**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### operator !=(HSteamNetConnection, HSteamNetConnection)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamNetworkingtypes/HSteamNetConnection.cs#L30)

```csharp
public static bool operator !=(HSteamNetConnection x, HSteamNetConnection y)
```

#### Parameters

- **x**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)
- **y**: [HSteamNetConnection](/docs/api/shared/steamapi/hsteamnetconnection)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

