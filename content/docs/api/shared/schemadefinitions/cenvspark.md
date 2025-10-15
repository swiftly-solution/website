---
title: CEnvSpark
---

```csharp
public interface CEnvSpark : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CEnvSpark>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Delay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSpark.cs#L17)

```csharp
ref float Delay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Magnitude

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSpark.cs#L19)

```csharp
ref int Magnitude { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OnSpark

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSpark.cs#L25)

```csharp
CEntityIOOutput OnSpark { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### TrailLength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSpark.cs#L21)

```csharp
ref int TrailLength { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Type

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSpark.cs#L23)

```csharp
ref int Type { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

