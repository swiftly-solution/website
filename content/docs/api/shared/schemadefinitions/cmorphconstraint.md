---
title: CMorphConstraint
---

```csharp
public interface CMorphConstraint : CBaseConstraint, CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBaseConstraint>, ISchemaClass<CMorphConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Max

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphConstraint.cs#L23)

```csharp
ref float Max { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Min

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphConstraint.cs#L21)

```csharp
ref float Min { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SlaveChannel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphConstraint.cs#L19)

```csharp
ref int SlaveChannel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetMorph

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphConstraint.cs#L17)

```csharp
string TargetMorph { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

