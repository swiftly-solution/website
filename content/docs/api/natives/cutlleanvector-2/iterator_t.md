---
title: I>.Iterator_t
---

# Struct CUtlLeanVector.Iterator_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L21)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CUtlLeanVector<T, I>.Iterator_t
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Iterator_t(I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L26)

```csharp
public Iterator_t(I i)
```

#### Parameters

- **i**: I

## Fields

### Index

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L24)

```csharp
public I Index
```

#### Field Value

- I

## Methods

### Equals(object?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L31)

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

## Operators

### operator ==(Iterator_t, Iterator_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L28)

```csharp
public static bool operator ==(CUtlLeanVector<T, I>.Iterator_t a, CUtlLeanVector<T, I>.Iterator_t b)
```

#### Parameters

- **a**: [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<T, I>.[Iterator_t](/docs/api/natives/cutlleanvector-2/iterator_t)
- **b**: [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<T, I>.[Iterator_t](/docs/api/natives/cutlleanvector-2/iterator_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator !=(Iterator_t, Iterator_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L29)

```csharp
public static bool operator !=(CUtlLeanVector<T, I>.Iterator_t a, CUtlLeanVector<T, I>.Iterator_t b)
```

#### Parameters

- **a**: [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<T, I>.[Iterator_t](/docs/api/natives/cutlleanvector-2/iterator_t)
- **b**: [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<T, I>.[Iterator_t](/docs/api/natives/cutlleanvector-2/iterator_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

