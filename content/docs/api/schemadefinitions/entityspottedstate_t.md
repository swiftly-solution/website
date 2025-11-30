---
title: EntitySpottedState_t
---

# Interface EntitySpottedState_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntitySpottedState_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface EntitySpottedState_t : ISchemaClass<EntitySpottedState_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<EntitySpottedState_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Spotted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntitySpottedState_t.cs#L18)

```csharp
ref bool Spotted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SpottedByMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntitySpottedState_t.cs#L20)

```csharp
ISchemaFixedArray<uint> SpottedByMask { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

## Methods

### SpottedByMaskUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntitySpottedState_t.cs#L23)

```csharp
void SpottedByMaskUpdated()
```

### SpottedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/EntitySpottedState_t.cs#L22)

```csharp
void SpottedUpdated()
```

