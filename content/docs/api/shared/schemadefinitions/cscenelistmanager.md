---
title: CSceneListManager
---

```csharp
public interface CSceneListManager : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CSceneListManager>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **ListManagers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneListManager.cs#L16)

```csharp
ref CUtlVector<CHandle<CSceneListManager>> ListManagers { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CSceneListManager](/docs/api/shared/schemadefinitions/cscenelistmanager)>>

### **Scenes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneListManager.cs#L18)

```csharp
string Scenes { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Scenes1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneListManager.cs#L20)

```csharp
ISchemaFixedArray<CHandle<CBaseEntity>> Scenes1 { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

