---
title: AABB_t
---

# Interface AABB_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AABB_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface AABB_t : ISchemaClass<AABB_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<AABB_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### MaxBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AABB_t.cs#L20)

```csharp
ref Vector MaxBounds { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MinBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AABB_t.cs#L18)

```csharp
ref Vector MinBounds { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

## Methods

### MaxBoundsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AABB_t.cs#L23)

```csharp
void MaxBoundsUpdated()
```

### MinBoundsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AABB_t.cs#L22)

```csharp
void MinBoundsUpdated()
```

