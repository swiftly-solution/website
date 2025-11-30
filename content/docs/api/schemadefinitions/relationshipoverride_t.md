---
title: RelationshipOverride_t
---

# Interface RelationshipOverride_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RelationshipOverride_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface RelationshipOverride_t : Relationship_t, ISchemaClass<Relationship_t>, ISchemaClass<RelationshipOverride_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [Relationship_t](/docs/api/schemadefinitions/relationship_t)
- [ISchemaClass<Relationship_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<RelationshipOverride_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ClassType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RelationshipOverride_t.cs#L20)

```csharp
ref Class_T ClassType { get; }
```

#### Property Value

- [Class_T](/docs/api/schemadefinitions/class_t)

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RelationshipOverride_t.cs#L18)

```csharp
ref CHandle<CBaseEntity> Entity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

