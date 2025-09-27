---
title: AABB_t
---

```csharp
public interface AABB_t : ISchemaClass<AABB_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**MaxBounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AABB_t.cs#L18)

```csharp
ref Vector MaxBounds { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**MinBounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AABB_t.cs#L16)

```csharp
ref Vector MinBounds { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

## Methods

**MaxBoundsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AABB_t.cs#L21)

```csharp
void MaxBoundsUpdated()
```

**MinBoundsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AABB_t.cs#L20)

```csharp
void MinBoundsUpdated()
```

