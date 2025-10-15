---
title: CCSPlayerController_DamageServices
---

```csharp
public interface CCSPlayerController_DamageServices : CPlayerControllerComponent, ISchemaClass<CPlayerControllerComponent>, ISchemaClass<CCSPlayerController_DamageServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DamageList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_DamageServices.cs#L19)

```csharp
ref CUtlVector<CDamageRecord> DamageList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CDamageRecord](/docs/api/shared/schemadefinitions/cdamagerecord)>

### SendUpdate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_DamageServices.cs#L17)

```csharp
ref int SendUpdate { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### DamageListUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_DamageServices.cs#L22)

```csharp
void DamageListUpdated()
```

### SendUpdateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_DamageServices.cs#L21)

```csharp
void SendUpdateUpdated()
```

