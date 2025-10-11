---
title: CShatterGlassShardPhysics
---

```csharp
public interface CShatterGlassShardPhysics : CPhysicsProp, CBreakableProp, CBaseProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaClass<CBreakableProp>, ISchemaClass<CPhysicsProp>, ISchemaClass<CShatterGlassShardPhysics>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Debris** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShardPhysics.cs#L16)

```csharp
ref bool Debris { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ParentShard** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShardPhysics.cs#L18)

```csharp
ref uint ParentShard { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **ShardDesc** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShardPhysics.cs#L20)

```csharp
shard_model_desc_t ShardDesc { get; }
```

#### Property Value

- [shard_model_desc_t](/docs/api/shared/schemadefinitions/shard_model_desc_t)

## Methods

### **ShardDescUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShardPhysics.cs#L22)

```csharp
void ShardDescUpdated()
```

