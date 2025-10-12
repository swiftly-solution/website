---
title: EntitySpottedState_t
---

```csharp
public interface EntitySpottedState_t : ISchemaClass<EntitySpottedState_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Spotted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntitySpottedState_t.cs#L16)

```csharp
ref bool Spotted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SpottedByMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntitySpottedState_t.cs#L18)

```csharp
ISchemaFixedArray<uint> SpottedByMask { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

## Methods

### SpottedByMaskUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntitySpottedState_t.cs#L21)

```csharp
void SpottedByMaskUpdated()
```

### SpottedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntitySpottedState_t.cs#L20)

```csharp
void SpottedUpdated()
```

