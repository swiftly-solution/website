---
title: CTriggerImpact
---

# Interface CTriggerImpact

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerImpact.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CTriggerImpact : CTriggerMultiple, CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerMultiple>, ISchemaClass<CTriggerImpact>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CTriggerMultiple](/docs/api/schemadefinitions/ctriggermultiple)
- [CBaseTrigger](/docs/api/schemadefinitions/cbasetrigger)
- [CBaseToggle](/docs/api/schemadefinitions/cbasetoggle)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseToggle>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseTrigger>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CTriggerMultiple>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CTriggerImpact>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Magnitude

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerImpact.cs#L18)

```csharp
ref float Magnitude { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Noise

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerImpact.cs#L20)

```csharp
ref float Noise { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OutputForce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerImpact.cs#L25)

```csharp
SchemaUntypedField OutputForce { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Viewkick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerImpact.cs#L22)

```csharp
ref float Viewkick { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

