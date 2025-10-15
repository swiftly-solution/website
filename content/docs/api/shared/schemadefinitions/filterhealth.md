---
title: FilterHealth
---

```csharp
public interface FilterHealth : CBaseFilter, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CBaseFilter>, ISchemaClass<FilterHealth>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AdrenalineActive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FilterHealth.cs#L17)

```csharp
ref bool AdrenalineActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HealthMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FilterHealth.cs#L21)

```csharp
ref int HealthMax { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HealthMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FilterHealth.cs#L19)

```csharp
ref int HealthMin { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

