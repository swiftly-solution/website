---
title: CRagdollManager
---

```csharp
public interface CRagdollManager : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CRagdollManager>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CanTakeDamage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollManager.cs#L24)

```csharp
ref bool CanTakeDamage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CurrentMaxRagdollCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollManager.cs#L18)

```csharp
ref byte CurrentMaxRagdollCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### MaxRagdollCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollManager.cs#L20)

```csharp
ref int MaxRagdollCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SaveImportant

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollManager.cs#L22)

```csharp
ref bool SaveImportant { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CurrentMaxRagdollCountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollManager.cs#L26)

```csharp
void CurrentMaxRagdollCountUpdated()
```

