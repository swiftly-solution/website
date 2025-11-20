---
title: CTriggerProximity
---

```csharp
public interface CTriggerProximity : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerProximity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### MeasureTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerProximity.cs#L18)

```csharp
ref CHandle<CBaseEntity> MeasureTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### MeasureTarget1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerProximity.cs#L20)

```csharp
string MeasureTarget1 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NearestEntityDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerProximity.cs#L27)

```csharp
SchemaUntypedField NearestEntityDistance { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Radius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerProximity.cs#L22)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Touchers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerProximity.cs#L24)

```csharp
ref int Touchers { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

