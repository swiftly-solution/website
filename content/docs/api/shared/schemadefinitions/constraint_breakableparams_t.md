---
title: constraint_breakableparams_t
---

```csharp
public interface constraint_breakableparams_t : ISchemaClass<constraint_breakableparams_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BodyMassScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L23)

```csharp
ISchemaFixedArray<float> BodyMassScale { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### ForceLimit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L19)

```csharp
ref float ForceLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsActive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L25)

```csharp
ref bool IsActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Strength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L17)

```csharp
ref float Strength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TorqueLimit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_breakableparams_t.cs#L21)

```csharp
ref float TorqueLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

