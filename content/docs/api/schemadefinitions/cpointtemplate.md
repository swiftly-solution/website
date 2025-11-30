---
title: CPointTemplate
---

# Interface CPointTemplate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPointTemplate : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPointTemplate>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CLogicalEntity](/docs/api/schemadefinitions/clogicalentity)
- [CServerOnlyEntity](/docs/api/schemadefinitions/cserveronlyentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CServerOnlyEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CLogicalEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPointTemplate>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AsynchronouslySpawnEntities

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L26)

```csharp
ref bool AsynchronouslySpawnEntities { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClientOnlyEntityBehavior

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L28)

```csharp
ref PointTemplateClientOnlyEntityBehavior_t ClientOnlyEntityBehavior { get; }
```

#### Property Value

- [PointTemplateClientOnlyEntityBehavior_t](/docs/api/schemadefinitions/pointtemplateclientonlyentitybehavior_t)

### CreatedSpawnGroupHandles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L32)

```csharp
ref CUtlVector<uint> CreatedSpawnGroupHandles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### EntityFilterName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L22)

```csharp
string EntityFilterName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OwnerSpawnGroupType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L30)

```csharp
ref PointTemplateOwnerSpawnGroupType_t OwnerSpawnGroupType { get; }
```

#### Property Value

- [PointTemplateOwnerSpawnGroupType_t](/docs/api/schemadefinitions/pointtemplateownerspawngrouptype_t)

### ScriptCallbackScope

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L40)

```csharp
SchemaUntypedField ScriptCallbackScope { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### ScriptSpawnCallback

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L37)

```csharp
SchemaUntypedField ScriptSpawnCallback { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Source2EntityLumpName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L20)

```csharp
string Source2EntityLumpName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SpawnedEntityHandles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L34)

```csharp
ref CUtlVector<CHandle<CEntityInstance>> SpawnedEntityHandles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CEntityInstance](/docs/api/schemadefinitions/centityinstance)>>

### TimeoutInterval

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L24)

```csharp
ref float TimeoutInterval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WorldName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointTemplate.cs#L18)

```csharp
string WorldName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

