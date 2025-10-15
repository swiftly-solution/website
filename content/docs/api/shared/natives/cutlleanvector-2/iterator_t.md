---
title: I>.Iterator_t
---

```csharp
public struct CUtlLeanVector<T, I>.Iterator_t
```

#### Inherited Members

## Constructors

### Iterator_t(I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L26)

```csharp
public Iterator_t(I i)
```

#### Parameters

- **i**: I

## Fields

### Index

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L24)

```csharp
public I Index
```

#### Field Value

- I

## Methods

### Equals(object?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L31)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

## Operators

### operator ==(Iterator_t, Iterator_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L28)

```csharp
public static bool operator ==(CUtlLeanVector<T, I>.Iterator_t a, CUtlLeanVector<T, I>.Iterator_t b)
```

#### Parameters

- **a**: [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<T, I>.[Iterator_t](/docs/api/shared/natives/cutlleanvector-2/iterator_t)
- **b**: [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<T, I>.[Iterator_t](/docs/api/shared/natives/cutlleanvector-2/iterator_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator !=(Iterator_t, Iterator_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L29)

```csharp
public static bool operator !=(CUtlLeanVector<T, I>.Iterator_t a, CUtlLeanVector<T, I>.Iterator_t b)
```

#### Parameters

- **a**: [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<T, I>.[Iterator_t](/docs/api/shared/natives/cutlleanvector-2/iterator_t)
- **b**: [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<T, I>.[Iterator_t](/docs/api/shared/natives/cutlleanvector-2/iterator_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

