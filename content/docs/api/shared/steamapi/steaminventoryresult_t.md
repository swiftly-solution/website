---
title: SteamInventoryResult_t
---

```csharp
[Serializable]
public struct SteamInventoryResult_t : IEquatable<SteamInventoryResult_t>, IComparable<SteamInventoryResult_t>
```

#### Implements

#### Inherited Members

## Constructors

### SteamInventoryResult_t(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L10)

```csharp
public SteamInventoryResult_t(int value)
```

#### Parameters

- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Fields

### Invalid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L7)

```csharp
public static readonly SteamInventoryResult_t Invalid
```

#### Field Value

- [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

### m_SteamInventoryResult

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L8)

```csharp
public int m_SteamInventoryResult
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### CompareTo(SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L46)

```csharp
public int CompareTo(SteamInventoryResult_t other)
```

#### Parameters

- **other**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L18)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L42)

```csharp
public bool Equals(SteamInventoryResult_t other)
```

#### Parameters

- **other**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L22)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L14)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(SteamInventoryResult_t, SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L26)

```csharp
public static bool operator ==(SteamInventoryResult_t x, SteamInventoryResult_t y)
```

#### Parameters

- **x**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **y**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator SteamInventoryResult_t(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L34)

```csharp
public static explicit operator SteamInventoryResult_t(int value)
```

#### Parameters

- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

### explicit operator int(SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L38)

```csharp
public static explicit operator int(SteamInventoryResult_t that)
```

#### Parameters

- **that**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### operator !=(SteamInventoryResult_t, SteamInventoryResult_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamInventory/SteamInventoryResult_t.cs#L30)

```csharp
public static bool operator !=(SteamInventoryResult_t x, SteamInventoryResult_t y)
```

#### Parameters

- **x**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)
- **y**: [SteamInventoryResult_t](/docs/api/shared/steamapi/steaminventoryresult_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

