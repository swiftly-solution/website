---
title: CAnimParameterBase
---

```csharp
public interface CAnimParameterBase : ISchemaClass<CAnimParameterBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Comment

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterBase.cs#L19)

```csharp
string Comment { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ComponentName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterBase.cs#L25)

```csharp
string ComponentName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Group

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterBase.cs#L21)

```csharp
string Group { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Id

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterBase.cs#L23)

```csharp
AnimParamID Id { get; }
```

#### Property Value

- [AnimParamID](/docs/api/shared/schemadefinitions/animparamid)

### IsReferenced

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterBase.cs#L29)

```csharp
ref bool IsReferenced { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterBase.cs#L17)

```csharp
ref CGlobalSymbol Name { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### NetworkingRequested

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterBase.cs#L27)

```csharp
ref bool NetworkingRequested { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

