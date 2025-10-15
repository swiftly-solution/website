---
title: Command
---

```csharp
[AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
public class Command : Attribute
```

#### Inheritance

#### Inherited Members

## Constructors

### Command(string, bool, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/Attributes/CommandAttribute.cs#L11)

```csharp
public Command(string name, bool registerRaw = false, string permission = "")
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **registerRaw**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- **permission**: [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/Attributes/CommandAttribute.cs#L5)

```csharp
public string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Permission

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/Attributes/CommandAttribute.cs#L9)

```csharp
public string Permission { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RegisterRaw

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/Attributes/CommandAttribute.cs#L7)

```csharp
public bool RegisterRaw { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

