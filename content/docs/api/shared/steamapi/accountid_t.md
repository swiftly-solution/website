---
title: AccountID_t
---

```csharp
[Serializable]
public struct AccountID_t : IEquatable<AccountID_t>, IComparable<AccountID_t>
```

#### Implements

#### Inherited Members

## Constructors

### AccountID_t(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L9)

```csharp
public AccountID_t(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### m_AccountID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L7)

```csharp
public uint m_AccountID
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### CompareTo(AccountID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L45)

```csharp
public int CompareTo(AccountID_t other)
```

#### Parameters

- **other**: [AccountID_t](/docs/api/shared/steamapi/accountid_t) - An object to compare with this instance.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

### Equals(object)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L17)

```csharp
public override bool Equals(object other)
```

#### Parameters

- **other**: [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(AccountID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L41)

```csharp
public bool Equals(AccountID_t other)
```

#### Parameters

- **other**: [AccountID_t](/docs/api/shared/steamapi/accountid_t) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L21)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L13)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(AccountID_t, AccountID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L25)

```csharp
public static bool operator ==(AccountID_t x, AccountID_t y)
```

#### Parameters

- **x**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)
- **y**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### explicit operator AccountID_t(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L33)

```csharp
public static explicit operator AccountID_t(uint value)
```

#### Parameters

- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [AccountID_t](/docs/api/shared/steamapi/accountid_t)

### explicit operator uint(AccountID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L37)

```csharp
public static explicit operator uint(AccountID_t that)
```

#### Parameters

- **that**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### operator !=(AccountID_t, AccountID_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/Types/SteamTypes/AccountID_t.cs#L29)

```csharp
public static bool operator !=(AccountID_t x, AccountID_t y)
```

#### Parameters

- **x**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)
- **y**: [AccountID_t](/docs/api/shared/steamapi/accountid_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

