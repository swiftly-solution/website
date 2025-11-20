---
title: CAnimEventDefinition
---

```csharp
public interface CAnimEventDefinition : ISchemaClass<CAnimEventDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Cycle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L22)

```csharp
ref float Cycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L24)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EndFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L20)

```csharp
ref int EndFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EventData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L27)

```csharp
SchemaUntypedField EventData { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### EventName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L31)

```csharp
ref CGlobalSymbol EventName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### Frame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L18)

```csharp
ref int Frame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LegacyOptions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L29)

```csharp
ref CBufferString LegacyOptions { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

