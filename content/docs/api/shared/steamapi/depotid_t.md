---
title: DepotId_t
---

```csharp
[Serializable]
public struct DepotId_t : IEquatable<DepotId_t>, IComparable<DepotId_t>
```

#### Implements

#### Inherited Members

## Constructors

### DepotId_t(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L10)

```csharp
public DepotId_t(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L7)

```csharp
public static readonly DepotId_t Invalid
```

#### Field Value

- [DepotId_t](/docs/api/shared/steamapi/depotid_t)

### m_DepotId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L8)

```csharp
public uint m_DepotId
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### CompareTo(DepotId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L46)

```csharp
public int CompareTo(DepotId_t other)
```

#### Parameters

- **other**: [DepotId_t](/docs/api/shared/steamapi/depotid_t) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:  

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(DepotId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L42)

```csharp
public bool Equals(DepotId_t other)
```

#### Parameters

- **other**: [DepotId_t](/docs/api/shared/steamapi/depotid_t) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(DepotId_t, DepotId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L26)

```csharp
public static bool operator ==(DepotId_t x, DepotId_t y)
```

#### Parameters

- **x**: [DepotId_t](/docs/api/shared/steamapi/depotid_t)
- **y**: [DepotId_t](/docs/api/shared/steamapi/depotid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator DepotId_t(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L34)

```csharp
public static explicit operator DepotId_t(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [DepotId_t](/docs/api/shared/steamapi/depotid_t)

### explicit operator uint(DepotId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L38)

```csharp
public static explicit operator uint(DepotId_t that)
```

#### Parameters

- **that**: [DepotId_t](/docs/api/shared/steamapi/depotid_t)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### operator !=(DepotId_t, DepotId_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/DepotId_t.cs#L30)

```csharp
public static bool operator !=(DepotId_t x, DepotId_t y)
```

#### Parameters

- **x**: [DepotId_t](/docs/api/shared/steamapi/depotid_t)
- **y**: [DepotId_t](/docs/api/shared/steamapi/depotid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

