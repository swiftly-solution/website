---
title: CPointTemplate
---

```csharp
public interface CPointTemplate : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPointTemplate>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AsynchronouslySpawnEntities

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L24)

```csharp
ref bool AsynchronouslySpawnEntities { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClientOnlyEntityBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L26)

```csharp
ref PointTemplateClientOnlyEntityBehavior_t ClientOnlyEntityBehavior { get; }
```

#### Property Value

- [PointTemplateClientOnlyEntityBehavior_t](/docs/api/shared/schemadefinitions/pointtemplateclientonlyentitybehavior_t)

### CreatedSpawnGroupHandles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L30)

```csharp
ref CUtlVector<uint> CreatedSpawnGroupHandles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### EntityFilterName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L20)

```csharp
string EntityFilterName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OwnerSpawnGroupType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L28)

```csharp
ref PointTemplateOwnerSpawnGroupType_t OwnerSpawnGroupType { get; }
```

#### Property Value

- [PointTemplateOwnerSpawnGroupType_t](/docs/api/shared/schemadefinitions/pointtemplateownerspawngrouptype_t)

### ScriptCallbackScope

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L38)

```csharp
SchemaUntypedField ScriptCallbackScope { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ScriptSpawnCallback

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L35)

```csharp
SchemaUntypedField ScriptSpawnCallback { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Source2EntityLumpName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L18)

```csharp
string Source2EntityLumpName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SpawnedEntityHandles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L32)

```csharp
ref CUtlVector<CHandle<CEntityInstance>> SpawnedEntityHandles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>>

### TimeoutInterval

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L22)

```csharp
ref float TimeoutInterval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WorldName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L16)

```csharp
string WorldName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

