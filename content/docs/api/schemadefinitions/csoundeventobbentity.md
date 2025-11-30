---
title: CSoundEventOBBEntity
---

# Interface CSoundEventOBBEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventOBBEntity.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSoundEventOBBEntity : CSoundEventEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundEventEntity>, ISchemaClass<CSoundEventOBBEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CSoundEventEntity](/docs/api/schemadefinitions/csoundevententity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSoundEventEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSoundEventOBBEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Maxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventOBBEntity.cs#L20)

```csharp
ref Vector Maxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Mins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventOBBEntity.cs#L18)

```csharp
ref Vector Mins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

## Methods

### MaxsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventOBBEntity.cs#L23)

```csharp
void MaxsUpdated()
```

### MinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventOBBEntity.cs#L22)

```csharp
void MinsUpdated()
```

