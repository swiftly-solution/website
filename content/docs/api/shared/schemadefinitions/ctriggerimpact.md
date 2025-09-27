---
title: CTriggerImpact
---

```csharp
public interface CTriggerImpact : CTriggerMultiple, CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerMultiple>, ISchemaClass<CTriggerImpact>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Magnitude** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerImpact.cs#L16)

```csharp
ref float Magnitude { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Noise** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerImpact.cs#L18)

```csharp
ref float Noise { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**OutputForce** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerImpact.cs#L23)

```csharp
SchemaUntypedField OutputForce { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**Viewkick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerImpact.cs#L20)

```csharp
ref float Viewkick { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

