---
title: CTakeDamageResult
---

```csharp
public interface CTakeDamageResult : ISchemaClass<CTakeDamageResult>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DamageDealt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTakeDamageResult.cs#L20)

```csharp
ref int DamageDealt { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HealthLost

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTakeDamageResult.cs#L18)

```csharp
ref int HealthLost { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OriginatingInfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTakeDamageResult.cs#L16)

```csharp
ref CTakeDamageInfo OriginatingInfo { get; }
```

#### Property Value

- [CTakeDamageInfo](/docs/api/shared/natives/ctakedamageinfo)

### PreModifiedDamage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTakeDamageResult.cs#L22)

```csharp
ref float PreModifiedDamage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TotalledDamageDealt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTakeDamageResult.cs#L26)

```csharp
ref int TotalledDamageDealt { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TotalledHealthLost

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTakeDamageResult.cs#L24)

```csharp
ref int TotalledHealthLost { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

