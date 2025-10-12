---
title: CPointProximitySensor
---

```csharp
public interface CPointProximitySensor : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CPointProximitySensor>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointProximitySensor.cs#L16)

```csharp
ref bool Disabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Distance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointProximitySensor.cs#L21)

```csharp
SchemaUntypedField Distance { get; }
```

- Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **TargetEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointProximitySensor.cs#L18)

```csharp
ref CHandle<CBaseEntity> TargetEntity { get; }
```

- Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

